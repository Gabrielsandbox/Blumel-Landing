const STORAGE_KEY = "narrative-funnel-template-v1";

const defaultConfig = {
  brand: {
    name: "Full Funnel",
    mark: "FF",
    descriptor: "sistema comercial",
    topBar: "A maior estrutura de processos comerciais do Brasil",
    nav: ["Para quem e", "Processo", "Cases", "FAQ"]
  },
  cta: {
    label: "Quero meu diagnostico",
    modalLabel: "Quero meu diagnostico gratuito",
    finalLabel: "Aplicar agora",
    urgency: "Cada estrategista atende apenas 4 empresas por semana."
  },
  hero: {
    qualifier: "Para operacoes entre R$75k e R$5M por mes",
    title: "Sua empresa vende. Mas o crescimento ainda depende de pessoas, nao de processos?",
    highlight: "nao de processos",
    subtitle: "Em um diagnostico 1:1, um estrategista encontra os gargalos do funil, da captacao ao fechamento, e mostra como crescer sem depender de vendedor estrela ou de mais trafego caro.",
    stats: [
      { value: "550+", label: "empresas aceleradas" },
      { value: "R$500M+", label: "gerados em receita" },
      { value: "8 anos", label: "construindo processos" }
    ]
  },
  symptoms: {
    kicker: "Sinais de vazamento",
    title: "Voce tem time, trafego e vendas. Mas ainda nao tem um sistema comercial.",
    body: "Sem um processo comercial replicavel, cada sintoma custa caro em operacoes estabelecidas, geralmente sem aparecer no DRE.",
    items: [
      { title: "Tudo depende do vendedor estrela", text: "Uma ou duas pessoas carregam o mes. Se elas somem, a meta vai junto." },
      { title: "A venda vive na cabeca do time", text: "Cada vendedor conduz a conversa de um jeito e a empresa nao sabe o que realmente converte." },
      { title: "Follow-up acontece quando da", text: "Leads bons esfriam porque nao existe cadencia clara, dono definido e proximo passo padrao." },
      { title: "Trafego pago virou caixa-preta", text: "O marketing compra lead, o comercial reclama da qualidade, e ninguem enxerga o funil inteiro." },
      { title: "Contratar mais gente so aumenta o caos", text: "Sem processo, cada novo vendedor aprende no improviso e multiplica a dependencia." }
    ],
    close: "Mais vendedor sem processo so aumenta a dependencia. Mais trafego sem qualificacao so joga dinheiro em um funil furado."
  },
  mistake: {
    title: "Voce provavelmente esta tentando resolver isso da forma errada.",
    cards: [
      { title: "Treinamento isolado", text: "Melhora discurso por alguns dias, mas nao cria cadencia, indicadores e rotina de gestao." },
      { title: "Mais trafego", text: "Aumenta volume antes de corrigir qualificacao, proposta e fechamento." },
      { title: "Planilha nova", text: "Organiza a bagunca por fora, mas nao muda o comportamento comercial por dentro." }
    ]
  },
  framework: {
    kicker: "Arquitetura",
    title: "As 6 engrenagens do processo comercial completo",
    body: "O diagnostico revela onde a engrenagem trava e qual ordem de ataque cria crescimento previsivel.",
    items: [
      { title: "Captacao ativa", text: "Lista, abordagem, cadencia e oferta para gerar conversas todos os dias." },
      { title: "Trafego com rastreio", text: "Leads pagos conectados ao CRM, ao vendedor e a receita real." },
      { title: "Qualificacao", text: "Criterios objetivos para separar curioso, oportunidade e comprador pronto." },
      { title: "Fechamento", text: "Roteiro, proposta, follow-up e negociacao sem depender de improviso." },
      { title: "Recompra e indicacao", text: "Receita mais barata vindo da base que ja confia na empresa." },
      { title: "Recrutamento comercial", text: "Perfil, onboarding e gestao para formar vendedor produtivo sem meses de tentativa." }
    ]
  },
  cases: {
    title: "Empresarios que trocaram dependencia por processo",
    body: "Os nomes podem ser trocados por qualquer prova social da sua narrativa: cases, numeros, prints ou depoimentos.",
    items: [
      { name: "Operacao B2B", result: "+42% em receita", text: "Padronizou qualificacao e follow-up antes de aumentar midia." },
      { name: "Clinica premium", result: "2,3x mais agendas", text: "Separou captacao, atendimento e fechamento em etapas mensuraveis." },
      { name: "SaaS consultivo", result: "-31% CAC", text: "Cortou canais ruins e colocou CRM como fonte unica de verdade." }
    ]
  },
  future: {
    title: "A vida do dono depois que o processo carrega a venda",
    items: [
      { title: "Previsibilidade", text: "Voce sabe quantas oportunidades entram, avancam e fecham." },
      { title: "Lucro real", text: "Decisoes de contratacao e midia passam a olhar margem, nao so faturamento." },
      { title: "Escala sem agenda lotada", text: "Cada novo cliente nao exige mais uma call do fundador." },
      { title: "Empresa que vale mais", text: "Compradores pagam melhor por operacoes que nao dependem de uma pessoa." }
    ]
  },
  authority: {
    title: "Nos tambem conhecemos essa armadilha por dentro.",
    body: "Antes de vender processo, vivemos operacoes onde vendedor estrela, trafego sem rastreio e rotina improvisada seguravam a escala. O metodo nasceu para tirar a empresa da sombra das proprias pessoas-chave.",
    metrics: [
      { value: "R$87M", label: "em faturamento proprio" },
      { value: "550+", label: "empresas aceleradas" },
      { value: "R$500M+", label: "em receita gerada" }
    ]
  },
  diagnostic: {
    title: "O que voce sai sabendo do diagnostico",
    items: [
      { title: "Gargalo principal", text: "Onde o funil perde mais dinheiro hoje." },
      { title: "Ordem de ataque", text: "O que corrigir primeiro para nao desperdicar energia." },
      { title: "Alavancas de receita", text: "Mudancas que podem aumentar receita com a mesma base de leads." },
      { title: "Mapa de processo", text: "Como transformar venda boa em rotina repetivel." }
    ]
  },
  fit: {
    title: "Esse diagnostico nao e para qualquer um.",
    yes: [
      "Voce ja vende e quer escalar com previsibilidade.",
      "Voce aceita olhar numeros, rotina e responsabilidade comercial.",
      "Voce quer um processo que sobreviva a troca de pessoas."
    ],
    no: [
      "Voce busca uma frase magica para vender sem mudar operacao.",
      "Voce nao tem interesse em medir funil e margem.",
      "Voce quer apenas mais leads, sem mexer na conversao."
    ]
  },
  faq: [
    { q: "O diagnostico tem custo?", a: "Nao. Ele funciona como uma analise inicial para identificar se existe encaixe entre o problema da empresa e a metodologia." },
    { q: "Funciona para empresa do meu tamanho?", a: "O template foi pensado para ofertas com criterio de qualificacao. Troque a faixa de receita, equipe ou maturidade conforme sua narrativa." },
    { q: "A call e pitch ou analise real?", a: "A promessa central e entregar clareza antes de vender implementacao. O pitch so faz sentido se o diagnostico indicar fit." },
    { q: "Posso convidar meu socio?", a: "Sim. Para decisoes comerciais estruturais, e melhor que os decisores estejam na mesma conversa." }
  ],
  final: {
    title: "Pronto para construir o processo que sua operacao ainda nao tem?",
    body: "Diagnostico 1:1, zero custo, com uma narrativa adaptavel ao seu mercado, promessa e mecanismo."
  },
  form: {
    title: "Solicitar diagnostico",
    time: "~ 60 segundos",
    success: "Aplicacao registrada. Substitua este envio por Webhook, CRM ou WhatsApp.",
    steps: [
      {
        id: "segmento",
        label: "Segmento",
        title: "Qual o segmento da sua empresa?",
        help: "Selecione a opcao que melhor representa seu negocio.",
        type: "choice",
        required: true,
        options: ["Saude", "Financas", "Juridico", "Tecnologia/SaaS", "Industria", "Servicos/Mentoria", "Outro"]
      },
      {
        id: "perfil",
        label: "Perfil",
        title: "Qual e o seu papel hoje na empresa?",
        help: "A conversa muda quando falamos com socio, lider ou operador.",
        type: "choice",
        required: true,
        options: ["Socio / Empresario", "Gerente / Lider", "Colaborador", "Freelancer"]
      },
      {
        id: "receita",
        label: "Receita",
        title: "Qual a receita media mensal da empresa?",
        help: "A analise muda em cada faixa. Sem julgamento, so contexto.",
        type: "choice",
        required: true,
        options: ["Abaixo de R$30 mil", "Entre R$30 mil e R$50 mil", "Entre R$50 mil e R$100 mil", "Entre R$100 mil e R$300 mil", "Entre R$300 mil e R$500 mil", "Entre R$500 mil e R$1 milhao", "Acima de R$1 milhao"]
      },
      {
        id: "contato",
        label: "Contato",
        title: "Quase la. Onde a gente te encontra?",
        help: "Um estrategista entra em contato para confirmar sua vaga.",
        type: "fields",
        required: true,
        fields: [
          { id: "nome", label: "Nome completo", type: "text", placeholder: "Como podemos te chamar" },
          { id: "email", label: "E-mail", type: "email", placeholder: "seu@email.com" },
          { id: "whatsapp", label: "WhatsApp", type: "tel", placeholder: "(11) 99999-9999" }
        ]
      }
    ]
  }
};

let config = loadConfig();
let currentStep = 0;
const answers = {};

const app = document.querySelector("#app");
const leadDialog = document.querySelector("#leadDialog");
const editorDialog = document.querySelector("#editorDialog");
const toast = document.querySelector("#toast");

function loadConfig() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved && saved.hero && saved.form) return saved;
  } catch {
    localStorage.removeItem(STORAGE_KEY);
  }
  return structuredClone(defaultConfig);
}

function saveConfig() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
}

function render() {
  document.title = `${config.brand.name} - ${config.form.title}`;
  app.innerHTML = `
    ${topStrip()}
    ${header()}
    <main>
      ${hero()}
      ${videoMock()}
      ${symptoms()}
      ${mistake()}
      ${framework()}
      ${cases()}
      ${future()}
      ${authority()}
      ${diagnostic()}
      ${fit()}
      ${faq()}
      ${finalCta()}
    </main>
    ${footer()}
    <button class="floating-editor" data-editor type="button">Editar narrativa</button>
  `;
}

function topStrip() {
  return `<div class="top-strip">${escapeHtml(config.brand.topBar)}</div>`;
}

function header() {
  return `
    <header class="site-header">
      <a class="brand" href="#top" aria-label="${escapeHtml(config.brand.name)}">
        <span class="brand-mark">${escapeHtml(config.brand.mark)}</span>
        <span><strong>${escapeHtml(config.brand.name)}</strong><small>${escapeHtml(config.brand.descriptor)}</small></span>
      </a>
      <nav aria-label="Navegacao">
        <a href="#para-quem">${escapeHtml(config.brand.nav[0])}</a>
        <a href="#processo">${escapeHtml(config.brand.nav[1])}</a>
        <a href="#cases">${escapeHtml(config.brand.nav[2])}</a>
        <a href="#faq">${escapeHtml(config.brand.nav[3])}</a>
      </nav>
      <button class="btn btn-primary" data-open-form type="button">${escapeHtml(config.cta.label)}</button>
    </header>
  `;
}

function hero() {
  return `
    <section class="hero" id="top">
      <div class="hero-inner">
        <div class="hero-copy">
          <div class="pill"><span></span>${escapeHtml(config.hero.qualifier)}</div>
          <h1>${emphasize(config.hero.title, config.hero.highlight)}</h1>
          <p>${escapeHtml(config.hero.subtitle)}</p>
          <div class="hero-actions">
            <button class="btn btn-primary btn-large" data-open-form type="button">${escapeHtml(config.cta.modalLabel)} <span aria-hidden="true">-></span></button>
            <a class="hero-link" href="#processo">Ver arquitetura</a>
          </div>
        </div>
        ${heroVisual()}
        <div class="stat-row">${config.hero.stats.map(stat).join("")}</div>
      </div>
    </section>
  `;
}

function heroVisual() {
  const labels = config.framework.items.slice(0, 4).map((item) => item.title);
  return `
    <aside class="funnel-visual" aria-label="Mapa visual do funil">
      <div class="visual-topline">
        <span>Mapa do funil</span>
        <strong>ao vivo</strong>
      </div>
      <div class="funnel-path">
        ${labels.map((label, index) => `
          <div class="funnel-step">
            <span>${index + 1}</span>
            <strong>${escapeHtml(label)}</strong>
          </div>
        `).join("")}
      </div>
      <div class="score-panel">
        <div>
          <span>Gargalo provavel</span>
          <strong>Qualificacao</strong>
        </div>
        <div class="score-meter"><span></span></div>
      </div>
      <div class="signal-grid">
        <span>CRM</span>
        <span>Follow-up</span>
        <span>Oferta</span>
      </div>
    </aside>
  `;
}

function videoMock() {
  return `
    <section class="video-section" aria-label="Video de apresentacao">
      <div class="video-shell">
        <div class="video-copy">
          <span class="kicker">Assista antes de aplicar</span>
          <h2>Entenda em poucos minutos onde o funil costuma travar.</h2>
          <p>Use este bloco como mock de VSL, demo, depoimento ou explicacao do mecanismo. Troque o texto e substitua o painel por um embed quando a narrativa estiver pronta.</p>
        </div>
        <button class="video-frame" data-open-form type="button" aria-label="Abrir aplicacao pelo video">
          <span class="video-badge">Diagnostico comercial</span>
          <span class="play-button" aria-hidden="true"></span>
          <span class="video-caption">Clique para aplicar agora</span>
          <span class="video-progress"><span></span></span>
        </button>
      </div>
    </section>
  `;
}

function symptoms() {
  return `
    <section class="section" id="para-quem">
      <div class="section-head">
        <span class="kicker">${escapeHtml(config.symptoms.kicker)}</span>
        <h2>${escapeHtml(config.symptoms.title)}</h2>
        <p>${escapeHtml(config.symptoms.body)}</p>
      </div>
      <div class="symptom-grid">${config.symptoms.items.map((item, index) => card(item, index + 1)).join("")}</div>
      <div class="warning-band">${escapeHtml(config.symptoms.close)}</div>
      <div class="center"><button class="btn btn-primary" data-open-form type="button">${escapeHtml(config.cta.modalLabel)}</button></div>
    </section>
  `;
}

function mistake() {
  return `
    <section class="section contrast">
      <div class="section-head">
        <h2>${escapeHtml(config.mistake.title)}</h2>
      </div>
      <div class="three-grid">${config.mistake.cards.map(card).join("")}</div>
    </section>
  `;
}

function framework() {
  return `
    <section class="section" id="processo">
      <div class="section-head">
        <span class="kicker">${escapeHtml(config.framework.kicker)}</span>
        <h2>${escapeHtml(config.framework.title)}</h2>
        <p>${escapeHtml(config.framework.body)}</p>
      </div>
      <div class="engine-grid">${config.framework.items.map((item, index) => engineCard(item, index)).join("")}</div>
      <div class="center"><button class="btn btn-primary" data-open-form type="button">${escapeHtml(config.cta.modalLabel)}</button></div>
    </section>
  `;
}

function cases() {
  return `
    <section class="section contrast" id="cases">
      <div class="section-head">
        <h2>${escapeHtml(config.cases.title)}</h2>
        <p>${escapeHtml(config.cases.body)}</p>
      </div>
      <div class="case-grid">${config.cases.items.map((item) => `
        <article class="case-card">
          <strong>${escapeHtml(item.result)}</strong>
          <h3>${escapeHtml(item.name)}</h3>
          <p>${escapeHtml(item.text)}</p>
        </article>
      `).join("")}</div>
    </section>
  `;
}

function future() {
  return `
    <section class="section">
      <div class="split">
        <div>
          <span class="kicker">Depois</span>
          <h2>${escapeHtml(config.future.title)}</h2>
        </div>
        <div class="stack-list">${config.future.items.map((item) => `
          <article>
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.text)}</p>
          </article>
        `).join("")}</div>
      </div>
    </section>
  `;
}

function authority() {
  return `
    <section class="authority">
      <div>
        <span class="kicker">Autoridade</span>
        <h2>${escapeHtml(config.authority.title)}</h2>
        <p>${escapeHtml(config.authority.body)}</p>
      </div>
      <div class="metric-wall">${config.authority.metrics.map(stat).join("")}</div>
    </section>
  `;
}

function diagnostic() {
  return `
    <section class="section">
      <div class="section-head"><h2>${escapeHtml(config.diagnostic.title)}</h2></div>
      <div class="diagnostic-grid">${config.diagnostic.items.map(card).join("")}</div>
      <div class="center"><button class="btn btn-primary" data-open-form type="button">${escapeHtml(config.cta.modalLabel)}</button></div>
    </section>
  `;
}

function fit() {
  return `
    <section class="section contrast">
      <div class="section-head"><h2>${escapeHtml(config.fit.title)}</h2></div>
      <div class="fit-grid">
        <div class="fit-column yes">${list("Serve se", config.fit.yes)}</div>
        <div class="fit-column no">${list("Nao serve se", config.fit.no)}</div>
      </div>
      <div class="center"><button class="btn btn-primary" data-open-form type="button">${escapeHtml(config.cta.modalLabel)}</button></div>
    </section>
  `;
}

function faq() {
  return `
    <section class="section" id="faq">
      <div class="section-head"><h2>Perguntas que todo decisor faz antes de aplicar</h2></div>
      <div class="faq-list">${config.faq.map((item, index) => `
        <details ${index === 0 ? "open" : ""}>
          <summary>${escapeHtml(item.q)}</summary>
          <p>${escapeHtml(item.a)}</p>
        </details>
      `).join("")}</div>
    </section>
  `;
}

function finalCta() {
  return `
    <section class="final-cta">
      <h2>${escapeHtml(config.final.title)}</h2>
      <p>${escapeHtml(config.final.body)}</p>
      <button class="btn btn-primary btn-large" data-open-form type="button">${escapeHtml(config.cta.finalLabel)}</button>
      <small>${escapeHtml(config.cta.urgency)}</small>
    </section>
  `;
}

function footer() {
  return `
    <footer class="footer">
      <div>
        <strong>${escapeHtml(config.brand.name)}</strong>
        <p>Template narrativo para funis de diagnostico, aplicacao e captacao consultiva.</p>
      </div>
      <div>
        <strong>Navegar</strong>
        <a href="#para-quem">Para quem e</a>
        <a href="#processo">Processo</a>
        <a href="#cases">Cases</a>
        <a href="#faq">FAQ</a>
      </div>
      <div>
        <strong>Template</strong>
        <button data-editor type="button">Editar narrativa</button>
        <button data-export type="button">Exportar JSON</button>
      </div>
    </footer>
  `;
}

function stat(item) {
  return `<div class="stat"><strong>${escapeHtml(item.value)}</strong><span>${escapeHtml(item.label)}</span></div>`;
}

function card(item, badge) {
  return `
    <article class="info-card">
      ${badge ? `<span>${String(badge).padStart(2, "0")}</span>` : ""}
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.text)}</p>
    </article>
  `;
}

function engineCard(item, index) {
  return `
    <article class="engine-card">
      <span>${index + 1}</span>
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.text)}</p>
    </article>
  `;
}

function list(title, items) {
  return `<h3>${escapeHtml(title)}</h3><ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
}

function openLeadForm() {
  currentStep = 0;
  renderLeadForm();
  leadDialog.showModal();
}

function renderLeadForm() {
  const step = config.form.steps[currentStep];
  const total = config.form.steps.length;
  leadDialog.innerHTML = `
    <form method="dialog" class="lead-form">
      <button class="dialog-close" value="cancel" aria-label="Fechar" type="submit">x</button>
      <div class="step-tabs">${config.form.steps.map((item, index) => `
        <button class="${index === currentStep ? "active" : ""}" data-go-step="${index}" type="button">
          <span>${index + 1}</span>${escapeHtml(item.label)}
        </button>
      `).join("")}</div>
      <div class="step-meta"><span>Passo ${currentStep + 1} de ${total}</span><span>${escapeHtml(config.form.time)}</span></div>
      <h2 id="leadTitle">${escapeHtml(step.title)}</h2>
      <p>${escapeHtml(step.help)}</p>
      ${step.type === "choice" ? choiceStep(step) : fieldsStep(step)}
      <div class="form-actions">
        ${currentStep > 0 ? `<button class="btn btn-ghost" data-prev-step type="button">Voltar</button>` : ""}
        <button class="btn btn-primary" data-next-step type="button">${currentStep === total - 1 ? escapeHtml(config.cta.finalLabel) : "Continuar"}</button>
      </div>
    </form>
  `;
}

function choiceStep(step) {
  return `<div class="choice-grid">${step.options.map((option) => {
    const checked = answers[step.id] === option ? "checked" : "";
    return `
      <label class="choice-card">
        <input name="${escapeHtml(step.id)}" value="${escapeHtml(option)}" type="radio" ${checked}>
        <span>${escapeHtml(option)}</span>
      </label>
    `;
  }).join("")}</div>`;
}

function fieldsStep(step) {
  return `<div class="field-grid">${step.fields.map((field) => `
    <label>
      ${escapeHtml(field.label)} *
      <input name="${escapeHtml(field.id)}" type="${escapeHtml(field.type)}" placeholder="${escapeHtml(field.placeholder)}" value="${escapeHtml(answers[field.id] || "")}" required>
    </label>
  `).join("")}</div>`;
}

function persistCurrentStep() {
  const step = config.form.steps[currentStep];
  if (step.type === "choice") {
    const selected = leadDialog.querySelector(`input[name="${step.id}"]:checked`);
    if (!selected && step.required) return false;
    if (selected) answers[step.id] = selected.value;
    return true;
  }
  let valid = true;
  step.fields.forEach((field) => {
    const input = leadDialog.querySelector(`[name="${field.id}"]`);
    if (!input.value.trim() && step.required) valid = false;
    answers[field.id] = input.value.trim();
  });
  return valid;
}

function nextStep() {
  if (!persistCurrentStep()) {
    notify("Preencha esta etapa para continuar");
    return;
  }
  if (currentStep < config.form.steps.length - 1) {
    currentStep += 1;
    renderLeadForm();
    return;
  }
  console.table(answers);
  leadDialog.close();
  notify(config.form.success);
}

function openEditor() {
  editorDialog.innerHTML = `
    <form method="dialog" class="editor-form">
      <button class="dialog-close" value="cancel" aria-label="Fechar" type="submit">x</button>
      <h2 id="editorTitle">Editor de narrativa</h2>
      <p>Edite o JSON para replicar o mesmo formato com outra promessa, mercado, mecanismo e formulario.</p>
      <textarea id="configEditor" spellcheck="false">${escapeHtml(JSON.stringify(config, null, 2))}</textarea>
      <div class="form-actions">
        <button class="btn btn-ghost" data-reset type="button">Restaurar exemplo</button>
        <button class="btn btn-ghost" data-copy type="button">Copiar JSON</button>
        <button class="btn btn-primary" data-save-config type="button">Salvar narrativa</button>
      </div>
    </form>
  `;
  editorDialog.showModal();
}

function saveEditor() {
  const textarea = editorDialog.querySelector("#configEditor");
  try {
    const parsed = JSON.parse(textarea.value);
    if (!parsed.hero || !parsed.form || !Array.isArray(parsed.form.steps)) {
      throw new Error("JSON precisa conter hero e form.steps");
    }
    config = parsed;
    saveConfig();
    render();
    editorDialog.close();
    notify("Narrativa salva");
  } catch (error) {
    notify(`JSON invalido: ${error.message}`);
  }
}

function exportConfig() {
  const json = JSON.stringify(config, null, 2);
  navigator.clipboard?.writeText(json).then(() => notify("JSON copiado")).catch(() => {
    if (!editorDialog.open) openEditor();
    const textarea = editorDialog.querySelector("#configEditor");
    if (textarea) textarea.focus();
    notify("Copie o JSON pelo editor");
  });
}

function emphasize(text, fragment) {
  const safe = escapeHtml(text);
  if (!fragment || !text.includes(fragment)) return safe;
  return safe.replace(escapeHtml(fragment), `<em>${escapeHtml(fragment)}</em>`);
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function notify(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(notify.timer);
  notify.timer = window.setTimeout(() => toast.classList.remove("show"), 2800);
}

document.addEventListener("click", (event) => {
  const target = event.target.closest("button, a");
  if (!target) return;

  if (target.matches("[data-open-form]")) openLeadForm();
  if (target.matches("[data-editor]")) openEditor();
  if (target.matches("[data-export]")) exportConfig();
  if (target.matches("[data-next-step]")) nextStep();
  if (target.matches("[data-prev-step]")) {
    persistCurrentStep();
    currentStep = Math.max(0, currentStep - 1);
    renderLeadForm();
  }
  if (target.matches("[data-go-step]")) {
    persistCurrentStep();
    currentStep = Number(target.dataset.goStep);
    renderLeadForm();
  }
  if (target.matches("[data-save-config]")) saveEditor();
  if (target.matches("[data-copy]")) exportConfig();
  if (target.matches("[data-reset]")) {
    config = structuredClone(defaultConfig);
    saveConfig();
    render();
    const textarea = editorDialog.querySelector("#configEditor");
    if (textarea) textarea.value = JSON.stringify(config, null, 2);
    notify("Exemplo restaurado");
  }
});

render();
