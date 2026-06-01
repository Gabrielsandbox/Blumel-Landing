const STORAGE_KEY = "blumel-enrollment-funnel-v2";

const defaultConfig = {
  brand: {
    name: "Blumel",
    mark: "BL",
    descriptor: "captacao de matriculas",
    topBar: "O maior ecossistema de matriculas do Brasil",
    nav: ["Para quem e", "Mecanismo", "Provas", "FAQ"]
  },
  cta: {
    label: "Quero meu diagnostico",
    modalLabel: "Quero meu diagnostico gratuito",
    finalLabel: "Aplicar agora",
    urgency: "O diagnostico mostra um mapa real da sua operacao, dos canais ao fechamento da matricula."
  },
  hero: {
    qualifier: "Para escolas e faculdades que faturam de R$30k a R$500k+ por mes",
    title: "Voce nao precisa de mais trafego, mais vendedor ou mais uma IA de atendimento. Voce precisa da estrutura certa para matricular mais rapido e mais barato.",
    highlight: "estrutura certa",
    subtitle: "A Blumel assume o funil inteiro, da aquisicao do lead ate a ponta da conversao. Construimos canais, geramos demanda, qualificamos e entregamos a oportunidade pronta. A escola ou faculdade fica com a parte que mais importa: converter a visita que levamos ou tirar o pedido da matricula no WhatsApp, sem aumentar verba de trafego e sem inchar o time comercial.",
    note: "Em um diagnostico 1:1, um estrategista identifica onde seu funil esta furado, da captacao ao fechamento da matricula, e mostra como crescer sem depender de vendedor estrela ou de mais trafego caro.",
    proof: "★★★★★ 4.9 · 2.500+ instituicoes · +400 mil matriculas geradas em 9 anos",
    stats: [
      { value: "4.9/5", label: "avaliacao media das instituicoes" },
      { value: "2.500+", label: "instituicoes atendidas" },
      { value: "+400 mil", label: "matriculas geradas em 9 anos" }
    ]
  },
  symptoms: {
    kicker: "Para quem e",
    title: "O problema nao e gerar lead. E tudo o que falta em volta dele.",
    body: "Se o lead chega, mas nao vira visita, conversa ou matricula, o gargalo esta na estrutura que deveria conduzir essa pessoa ate a decisao.",
    items: [
      { title: "Voce depende so do trafego pago", text: "Toda matricula do mes sai do anuncio do mes. Se a verba para, a captacao para, porque nao existe outro canal trazendo aluno em paralelo." },
      { title: "O lead chega e morre no caminho", text: "Demora para responder, ninguem conduz para visita, ninguem fecha na conversa e ninguem faz follow-up. Voce paga para gerar e perde na largada." },
      { title: "Cada melhoria e uma peca solta", text: "Um pouco de trafego aqui, um vendedor ali, uma planilha acola. Nada conversa entre si. Peca solta nao vira resultado, vira custo." },
      { title: "Tudo depende de voce ou do vendedor ter jeito", text: "Sem estrutura, a captacao anda no improviso. Se a pessoa-chave falha, o mes inteiro vai junto." }
    ],
    close: "Nao falta esforco nem dinheiro. Falta estrutura: um funil pensado de ponta a ponta, com estrategia para fazer o lead matricular mais rapido e custando menos."
  },
  mistake: {
    title: "A grande armadilha: as mentiras que deixam a captacao mais cara.",
    cards: [
      { title: "Mentira #1 - Preciso colocar mais dinheiro no trafego", text: "Falso. Trafego e um canal, nao a estrategia. Sozinho, ele so fica mais caro. A virada esta em outros canais de aquisicao e em um funil que aproveita cada lead ate o fim." },
      { title: "Mentira #2 - Preciso contratar mais vendedor", text: "Falso. Mais gente sem estrutura e mais custo e mais dependencia. Um unico vendedor dentro de um funil bem montado fecha mais do que tres no improviso." },
      { title: "Mentira #3 - Uma IA de atendimento resolve", text: "Falso. IA sem estrategia e so um robo respondendo rapido e perdendo lead na mesma velocidade. Tecnologia e peca do funil, nao o funil." },
      { title: "Mentira #4 - Se eu baixar a mensalidade, lota", text: "Falso. Desconto corroi margem e nao conserta um funil furado. Quem some nao some por preco, some por falta de conducao e follow-up." }
    ]
  },
  framework: {
    kicker: "O mecanismo unico",
    title: "Nos fazemos o funil inteiro.",
    body: "Nao e gastar mais. E ter estrutura e estrategia, deixando a execucao com quem opera captacao de matriculas ha 9 anos.",
    items: [
      { title: "Aquisicao multicanal", text: "Nao dependemos so de trafego pago. Em instituicoes parceiras, mais de 50% das matriculas do mes nao vem do trafego pago daquele mes." },
      { title: "Geracao e qualificacao de lead", text: "A gente atrai e separa quem esta pronto. O vendedor nao perde tempo com curioso." },
      { title: "Conducao ate a conversao", text: "Conduzimos cada lead ate o ponto de virada: a visita agendada ou o pedido de matricula no WhatsApp." },
      { title: "Follow-up e reativacao", text: "Quem nao fechou na hora e retomado. Visitou e nao voltou, conversou e sumiu: tudo volta para o jogo." },
      { title: "A ponta fica com voce", text: "Recebemos o lead, montamos o funil e entregamos a oportunidade pronta. A instituicao so converte." },
      { title: "Operacao sem horas vagas", text: "Voce nao monta nada nem aprende funil nas horas vagas. Nos operamos a captacao. Voce matricula." }
    ]
  },
  cases: {
    title: "Nao e mais um curso, nem mais um freelancer de trafego.",
    body: "A Blumel entra para operar a captacao inteira. A instituicao recebe a oportunidade pronta para converter visita ou fechar o pedido no WhatsApp.",
    items: [
      { name: "Nao e mentoria", result: "Execucao", text: "Voce nao vai aprender a fazer nas horas vagas. Quem faz somos nos." },
      { name: "Nao e trafego avulso", result: "Funil", text: "Subir campanha nao resolve sozinho. Trafego e uma peca de um funil inteiro." },
      { name: "Nao e contratar mais vendedor", result: "Estrutura", text: "O gargalo nao e gente. E processo, canal, conducao e follow-up." },
      { name: "Nao e so IA de atendimento", result: "Estrategia", text: "IA sem estrategia por tras e so velocidade para perder lead do mesmo jeito." }
    ]
  },
  future: {
    title: "A vida depois que a captacao deixa de depender so do trafego.",
    items: [
      { title: "Outros canais sustentando o mes", text: "A captacao nao fica refem do anuncio do mes ou de uma unica fonte de demanda." },
      { title: "Custo por matricula menor", text: "O mesmo lead rende mais, o aluno e melhor conduzido e a decisao acontece mais rapido." },
      { title: "Sem inchar verba nem time", text: "A instituicao usa a mesma estrutura comercial com mais resultado na ponta." },
      { title: "Funil operado por quem faz ha 9 anos", text: "Voce nao vira gestor de trafego, gestor de funil ou especialista em automacao." },
      { title: "A escola faz so a ponta", text: "Converter a visita que chega pronta ou tirar o pedido de matricula no WhatsApp." }
    ]
  },
  authority: {
    title: "Lucas Blumel construiu um ecossistema de matriculas para instituicoes de ensino.",
    body: "Nos ultimos 9 anos, a Blumel replicou esse metodo em mais de 2.500 instituicoes, entre escolas profissionalizantes, faculdades, escolas de idiomas, tecnico, EJA, escolas regulares e educacao infantil. A especialidade e operar a captacao de ponta a ponta para a instituicao focar na conversao final.",
    person: {
      name: "Lucas Blumel",
      role: "fundador da Blumel",
      quote: "A instituicao nao precisa de mais uma peca solta. Precisa de um funil completo, operado por quem entende o caminho da matricula.",
      photo: ""
    },
    metrics: [
      { value: "9 anos", label: "operando captacao educacional" },
      { value: "2.500+", label: "instituicoes de ensino" },
      { value: "+400 mil", label: "matriculas geradas" }
    ]
  },
  diagnostic: {
    title: "O que voce sai sabendo no diagnostico",
    items: [
      { title: "Canais alem do trafego pago", text: "Quais fontes de aquisicao cabem na sua instituicao e podem sustentar matriculas em paralelo." },
      { title: "Onde o funil perde matricula", text: "O ponto em que o lead esfria, some ou chega despreparado para a conversao." },
      { title: "Reducao de custo por matricula", text: "Quanto da para melhorar quando a estrutura conduz melhor cada oportunidade gerada." },
      { title: "Mapa real da operacao", text: "Voce sai com um diagnostico concreto da captacao, qualificacao, follow-up e conversao." }
    ]
  },
  fit: {
    title: "Esse diagnostico e para instituicoes que querem matricular com estrutura.",
    yes: [
      "Escolas, faculdades, cursos tecnicos, profissionalizantes, idiomas, EJA ou educacao infantil.",
      "Instituicoes que faturam de R$30k a R$500k+ por mes.",
      "Operacoes que querem depender menos de trafego pago e improviso comercial."
    ],
    no: [
      "Quem quer apenas desconto, mensalidade menor ou mais verba de anuncio.",
      "Quem procura mentoria para executar sozinho nas horas vagas.",
      "Quem nao quer medir lead, visita, follow-up e custo por matricula."
    ]
  },
  faq: [
    { q: "O diagnostico tem custo?", a: "Nao. Ele serve para entender sua operacao atual, os canais possiveis e onde o funil esta perdendo matriculas." },
    { q: "A Blumel faz so trafego pago?", a: "Nao. Trafego e apenas um canal. O trabalho envolve aquisicao multicanal, qualificacao, conducao, follow-up e entrega da oportunidade pronta." },
    { q: "Minha escola precisa contratar mais vendedores?", a: "Nao necessariamente. A proposta e fazer o mesmo time receber oportunidades mais preparadas, com menos improviso e mais conducao." },
    { q: "Isso funciona para qual tipo de instituicao?", a: "Escolas profissionalizantes, faculdades, idiomas, tecnico, EJA, escolas regulares e educacao infantil podem aplicar o diagnostico." }
  ],
  final: {
    title: "Pronto para descobrir onde sua instituicao esta perdendo matriculas?",
    body: "No diagnostico 1:1, um estrategista identifica os pontos onde seu funil esta furado, da captacao ao fechamento da matricula, e mostra como crescer sem depender de vendedor estrela ou de mais trafego caro."
  },
  calendar: {
    title: "Agora escolha o melhor horario para o diagnostico.",
    body: "Depois de responder o quiz, selecione um dia e horario no calendario abaixo. Assim o estrategista ja recebe seu contexto antes da conversa.",
    url: "https://calendly.com/blumel/diagnostico"
  },
  form: {
    title: "Solicitar diagnostico gratuito",
    time: "~ 60 segundos",
    success: "Aplicacao registrada. Um estrategista da Blumel entrara em contato para confirmar os proximos passos.",
    steps: [
      {
        id: "segmento",
        label: "Instituicao",
        title: "Qual tipo de instituicao voce representa?",
        help: "Isso ajuda a entender o ciclo de captacao e matricula.",
        type: "choice",
        required: true,
        options: ["Escola profissionalizante", "Faculdade", "Escola de idiomas", "Curso tecnico", "EJA", "Escola regular", "Educacao infantil", "Outro"]
      },
      {
        id: "perfil",
        label: "Perfil",
        title: "Qual e o seu papel hoje na instituicao?",
        help: "A conversa muda quando falamos com mantenedor, diretor ou lider comercial.",
        type: "choice",
        required: true,
        options: ["Mantenedor / Socio", "Diretor", "Coordenador comercial", "Marketing", "Secretaria / Atendimento", "Outro"]
      },
      {
        id: "receita",
        label: "Faturamento",
        title: "Qual o faturamento mensal aproximado?",
        help: "A analise muda conforme maturidade, verba, ticket e volume de matriculas.",
        type: "choice",
        required: true,
        options: ["Abaixo de R$30 mil", "Entre R$30 mil e R$50 mil", "Entre R$50 mil e R$100 mil", "Entre R$100 mil e R$300 mil", "Entre R$300 mil e R$500 mil", "Acima de R$500 mil"]
      },
      {
        id: "contato",
        label: "Contato",
        title: "Quase la. Onde a Blumel te encontra?",
        help: "Um estrategista entra em contato para confirmar o diagnostico.",
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
    <button class="mobile-sticky-cta" data-open-form type="button">${escapeHtml(config.cta.modalLabel)}</button>
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
          ${config.hero.note ? `<p class="hero-note">${escapeHtml(config.hero.note)}</p>` : ""}
          ${config.hero.proof ? `<div class="hero-proof">${escapeHtml(config.hero.proof)}</div>` : ""}
          <div class="hero-actions">
            <button class="btn btn-primary btn-large" data-open-form type="button">${escapeHtml(config.cta.modalLabel)} <span aria-hidden="true">-></span></button>
            <a class="hero-link" href="#processo">Ver como funciona</a>
          </div>
          <small class="hero-microcopy">Diagnostico gratuito, com mapa real da sua captacao antes de qualquer proposta.</small>
        </div>
        <div class="stat-row">${config.hero.stats.map(stat).join("")}</div>
        ${conversionRail()}
      </div>
    </section>
  `;
}

function conversionRail() {
  const items = [
    ["Aquisicao", "canais alem do trafego pago"],
    ["Conducao", "lead guiado ate visita ou WhatsApp"],
    ["Conversao", "oportunidade pronta para matricula"]
  ];
  return `
    <div class="conversion-rail" aria-label="Resumo do funil Blumel">
      ${items.map(([title, text], index) => `
        <article>
          <span>${String(index + 1).padStart(2, "0")}</span>
          <strong>${escapeHtml(title)}</strong>
          <p>${escapeHtml(text)}</p>
        </article>
      `).join("")}
    </div>
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
  const person = config.authority.person || {};
  const photo = person.photo
    ? `<img src="${escapeHtml(person.photo)}" alt="${escapeHtml(person.name || "Lucas Blumel")}">`
    : `<span aria-hidden="true">${escapeHtml((person.name || "Lucas Blumel").split(" ").map((part) => part[0]).join("").slice(0, 2))}</span>`;
  return `
    <section class="authority">
      <div>
        <span class="kicker">Autoridade</span>
        <h2>${escapeHtml(config.authority.title)}</h2>
        <p>${escapeHtml(config.authority.body)}</p>
      </div>
      <div class="authority-stack">
        <article class="authority-profile">
          <div class="authority-photo">${photo}</div>
          <div>
            <strong>${escapeHtml(person.name || "Lucas Blumel")}</strong>
            <small>${escapeHtml(person.role || "fundador da Blumel")}</small>
            <p>${escapeHtml(person.quote || "")}</p>
          </div>
        </article>
        <div class="metric-wall">${config.authority.metrics.map(stat).join("")}</div>
      </div>
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
        <p>Ecossistema de captacao para escolas e faculdades que querem matricular mais rapido e mais barato.</p>
      </div>
      <div>
        <strong>Navegar</strong>
        <a href="#para-quem">Para quem e</a>
        <a href="#processo">Processo</a>
        <a href="#cases">Cases</a>
        <a href="#faq">FAQ</a>
      </div>
      <div>
        <strong>Diagnostico</strong>
        <button data-open-form type="button">Quero meu diagnostico gratuito</button>
        <a href="#processo">Ver mecanismo</a>
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
  renderScheduleStep();
  notify("Quiz concluido. Agora escolha o horario do diagnostico.");
}

function renderScheduleStep() {
  const calendar = config.calendar || defaultConfig.calendar;
  const params = new URLSearchParams();
  if (answers.nome) params.set("name", answers.nome);
  if (answers.email) params.set("email", answers.email);
  if (answers.whatsapp) params.set("a1", answers.whatsapp);
  if (answers.segmento) params.set("a2", answers.segmento);
  if (answers.receita) params.set("a3", answers.receita);
  const calendarUrl = `${calendar.url}${calendar.url.includes("?") ? "&" : "?"}${params.toString()}`;

  leadDialog.innerHTML = `
    <form method="dialog" class="lead-form schedule-form">
      <button class="dialog-close" value="cancel" aria-label="Fechar" type="submit">x</button>
      <div class="step-meta"><span>Quiz concluido</span><span>Agendamento</span></div>
      <h2 id="leadTitle">${escapeHtml(calendar.title)}</h2>
      <p>${escapeHtml(calendar.body)}</p>
      <div class="calendar-embed">
        <iframe
          title="Agenda do diagnostico Blumel"
          src="${escapeHtml(calendarUrl)}"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div class="form-actions">
        <button class="btn btn-ghost" data-edit-quiz type="button">Voltar ao quiz</button>
        <a class="btn btn-primary" href="${escapeHtml(calendarUrl)}" target="_blank" rel="noreferrer">Abrir Calendly em nova aba</a>
      </div>
    </form>
  `;
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
  if (target.matches("[data-edit-quiz]")) {
    currentStep = config.form.steps.length - 1;
    renderLeadForm();
  }
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
