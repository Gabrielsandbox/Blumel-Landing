import { createReadStream, existsSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize } from "node:path";

const port = Number(process.env.PORT || 4173);
const host = process.env.HOST || "0.0.0.0";
const root = process.cwd();
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".jpg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".mp4": "video/mp4"
};

// Integração com o SIM (CRM). O token identifica a instituição inteira e por
// isso fica apenas no servidor, nunca no JavaScript da página.
const sim = {
  url: process.env.SIM_API_URL || "https://app.eusousim.com.br/api/webhooks/v1/leads",
  token: process.env.SIM_TOKEN || "",
  origem: process.env.SIM_ORIGEM || "landing-blumel",
  funilId: toOptionalNumber(process.env.SIM_FUNIL_ID ?? "3778"),
  etapaId: toOptionalNumber(process.env.SIM_ETAPA_ID ?? "21524"),
  tags: (process.env.SIM_TAGS || "landing").split(",").map((tag) => tag.trim()).filter(Boolean)
};

const allowedOrigins = (process.env.ALLOWED_ORIGINS || "https://gabrielsandbox.github.io")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

function toOptionalNumber(value) {
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : undefined;
}

function corsHeaders(request) {
  const origin = request.headers.origin;
  if (!origin || !allowedOrigins.includes(origin)) return {};
  return {
    "access-control-allow-origin": origin,
    "access-control-allow-methods": "POST, OPTIONS",
    "access-control-allow-headers": "Content-Type",
    "access-control-max-age": "86400",
    "vary": "Origin"
  };
}

function sendJson(response, status, body, extraHeaders = {}) {
  response.writeHead(status, { "content-type": "application/json; charset=utf-8", ...extraHeaders });
  response.end(JSON.stringify(body));
}

function readJsonBody(request, limit = 64 * 1024) {
  return new Promise((resolve, reject) => {
    let raw = "";
    request.setEncoding("utf8");
    request.on("data", (chunk) => {
      raw += chunk;
      if (raw.length > limit) {
        reject(new Error("Payload muito grande"));
        request.destroy();
      }
    });
    request.on("end", () => {
      try {
        resolve(raw ? JSON.parse(raw) : {});
      } catch {
        reject(new Error("JSON inválido"));
      }
    });
    request.on("error", reject);
  });
}

function cleanText(value, max = 200) {
  return String(value ?? "").trim().slice(0, max);
}

// Converte o payload da landing (mesmo formato enviado ao webhook e ao Supabase)
// no contrato do endpoint de leads do SIM.
function buildSimPayload(payload) {
  const answers = payload?.answers || {};
  const nome = cleanText(answers.nome);
  const telefone = cleanText(answers.whatsapp, 40).replace(/\D/g, "");
  const email = cleanText(answers.email);
  const segmento = cleanText(answers.segmento);

  const lead = { nome, telefone };
  if (email) lead.email = email;
  lead.interesse = segmento ? `Diagnóstico gratuito · ${segmento}` : "Diagnóstico gratuito";

  // As respostas do quiz viram tags para o time comercial ver o perfil no CRM.
  const qualificacao = ["perfil", "receita", "vendedores", "trafego", "desafio"]
    .map((key) => cleanText(answers[key], 80))
    .filter(Boolean);
  const instagram = cleanText(answers.instagram, 60);
  const utm = payload?.utm || {};
  const utmTags = ["utm_source", "utm_campaign"].map((key) => cleanText(utm[key], 60)).filter(Boolean);

  const body = {
    lead,
    origem: sim.origem,
    tags: [...new Set([...sim.tags, segmento, ...qualificacao, instagram, ...utmTags].filter(Boolean))]
  };
  if (sim.funilId) body.id_do_funil = sim.funilId;
  if (sim.etapaId) body.id_da_etapa_no_funil = sim.etapaId;
  return body;
}

async function handleSimLead(request, response) {
  const cors = corsHeaders(request);

  if (request.method === "OPTIONS") {
    response.writeHead(204, cors);
    response.end();
    return;
  }
  if (request.method !== "POST") {
    sendJson(response, 405, { ok: false, error: "Use POST" }, cors);
    return;
  }
  if (!sim.token) {
    console.error("SIM_TOKEN não configurado; lead não enviado ao SIM.");
    sendJson(response, 503, { ok: false, error: "Integração com o SIM não configurada" }, cors);
    return;
  }

  let payload;
  try {
    payload = await readJsonBody(request);
  } catch (error) {
    sendJson(response, 400, { ok: false, error: error.message }, cors);
    return;
  }

  const simPayload = buildSimPayload(payload);
  if (!simPayload.lead.nome || !simPayload.lead.telefone) {
    console.warn("SIM lead rejeitado: nome ou WhatsApp ausentes");
    sendJson(response, 400, { ok: false, error: "Nome e WhatsApp são obrigatórios" }, cors);
    return;
  }

  try {
    const simResponse = await fetch(sim.url, {
      method: "POST",
      headers: { "Content-Type": "application/json", "token-de-acesso": sim.token },
      body: JSON.stringify(simPayload),
      signal: AbortSignal.timeout(10_000)
    });
    const text = await simResponse.text();
    let data = {};
    try {
      data = text ? JSON.parse(text) : {};
    } catch {
      data = { raw: text };
    }

    if (!simResponse.ok) {
      console.error(`SIM respondeu ${simResponse.status}`, data);
      sendJson(response, 502, { ok: false, status: simResponse.status, errors: data.errors || data }, cors);
      return;
    }

    const leadId = data.lead_id ?? data.id ?? null;
    console.log(
      `SIM lead ${data.duplicado ? "duplicado" : "criado"} id=${leadId} telefone=***${simPayload.lead.telefone.slice(-4)} funil=${sim.funilId ?? "padrão"} etapa=${sim.etapaId ?? "padrão"}`
    );
    sendJson(response, 200, {
      ok: true,
      status: simResponse.status,
      duplicado: Boolean(data.duplicado),
      lead_id: leadId
    }, cors);
  } catch (error) {
    console.error("Falha ao chamar o SIM", error);
    sendJson(response, 502, { ok: false, error: "Falha ao chamar o SIM" }, cors);
  }
}

function serveStatic(request, response) {
  const url = new URL(request.url || "/", `http://${request.headers.host}`);
  const requested = normalize(url.pathname === "/" ? "/index.html" : url.pathname);
  const filePath = join(root, requested);

  if (!filePath.startsWith(root) || !existsSync(filePath)) {
    response.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
    response.end("Not found");
    return;
  }

  response.writeHead(200, { "content-type": types[extname(filePath)] || "application/octet-stream" });
  createReadStream(filePath).pipe(response);
}

createServer((request, response) => {
  const url = new URL(request.url || "/", `http://${request.headers.host}`);
  if (url.pathname === "/api/sim-lead") {
    handleSimLead(request, response);
    return;
  }
  serveStatic(request, response);
}).listen(port, host, () => {
  console.log(`Funil narrativo em http://127.0.0.1:${port}`);
  console.log(sim.token ? "Integração SIM ativa." : "SIM_TOKEN ausente: leads não serão enviados ao SIM.");
});
