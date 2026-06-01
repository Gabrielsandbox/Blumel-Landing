const STORAGE_KEY = "blumel-enrollment-funnel-v3";

const defaultConfig = {
  brand: {
    name: "Blumel",
    mark: "BL",
    logo: "assets/blumel-logo.png",
    descriptor: "captação de matrículas",
    topBar: "O maior ecossistema de matrículas do Brasil",
    nav: ["Para quem é", "Mecanismo", "Provas", "FAQ"]
  },
  cta: {
    label: "Quero meu diagnóstico",
    modalLabel: "Quero meu diagnóstico gratuito",
    finalLabel: "Aplicar agora",
    urgency: "O diagnóstico mostra um mapa real da sua operação, dos canais ao fechamento da matrícula."
  },
  hero: {
    qualifier: "Para escolas e faculdades que faturam de R$30k a R$500k+ por mês",
    title: "Você não precisa de mais tráfego, mais vendedor ou mais uma IA de atendimento. Você precisa da estrutura certa para matricular mais rápido e mais barato.",
    highlight: "estrutura certa",
    subtitle: "A Blumel assume o funil inteiro, da aquisição do lead até a ponta da conversão. Construímos canais, geramos demanda, qualificamos e entregamos a oportunidade pronta. À escola ou faculdade sobra a parte que mais importa: converter a visita que levamos ou tirar o pedido da matrícula no WhatsApp, sem aumentar verba de tráfego e sem inchar o time comercial.",
    note: "Em um diagnóstico 1:1, um estrategista identifica onde seu funil está furado, da captação ao fechamento da matrícula, e mostra como crescer sem depender de vendedor estrela ou de mais tráfego caro.",
    proof: "★★★★★ 4,9 · 2.500+ instituições · +400 mil matrículas geradas em 9 anos",
    stats: [
      { value: "4,9/5", label: "avaliação média das instituições" },
      { value: "2.500+", label: "instituições atendidas" },
      { value: "+400 mil", label: "matrículas geradas em 9 anos" }
    ]
  },
  symptoms: {
    kicker: "Para quem é",
    title: "O problema não é gerar lead. É tudo o que falta em volta dele.",
    body: "Se o lead chega, mas não vira visita, conversa ou matrícula, o gargalo está na estrutura que deveria conduzir essa pessoa até a decisão.",
    items: [
      { title: "Você depende só do tráfego pago", text: "Toda matrícula do mês sai do anúncio do mês. Se a verba para, a captação para, porque não existe outro canal trazendo aluno em paralelo." },
      { title: "O lead chega e morre no caminho", text: "Demora para responder, ninguém conduz para visita, ninguém fecha na conversa e ninguém faz follow-up. Você paga para gerar e perde na largada." },
      { title: "Cada melhoria é uma peça solta", text: "Um pouco de tráfego aqui, um vendedor ali, uma planilha acolá. Nada conversa entre si. Peça solta não vira resultado; vira custo." },
      { title: "Tudo depende de você ou do vendedor ter jeito", text: "Sem estrutura, a captação anda no improviso. Se a pessoa-chave falha, o mês inteiro vai junto." }
    ],
    close: "Não falta esforço nem dinheiro. Falta estrutura: um funil pensado de ponta a ponta, com estratégia para fazer o lead matricular mais rápido e custando menos."
  },
  mistake: {
    title: "A grande armadilha: as mentiras que deixam a captação mais cara.",
    cards: [
      { title: "Mentira #1 — Preciso colocar mais dinheiro no tráfego", text: "Falso. Tráfego é um canal, não a estratégia. Sozinho, ele só fica mais caro. A virada está em outros canais de aquisição e em um funil que aproveita cada lead até o fim." },
      { title: "Mentira #2 — Preciso contratar mais vendedor", text: "Falso. Mais gente sem estrutura é mais custo e mais dependência. Um único vendedor, dentro de um funil bem montado, fecha mais do que três no improviso." },
      { title: "Mentira #3 — Uma IA de atendimento resolve", text: "Falso. IA sem estratégia é só um robô respondendo rápido e perdendo lead na mesma velocidade. Tecnologia é peça do funil, não o funil." },
      { title: "Mentira #4 — Se eu baixar a mensalidade, lota", text: "Falso. Desconto corrói margem e não conserta um funil furado. Quem some não some por preço; some por falta de condução e follow-up." }
    ]
  },
  framework: {
    kicker: "O mecanismo único",
    title: "Nós fazemos o funil inteiro.",
    body: "Não é gastar mais. É ter estrutura e estratégia, deixando a execução com quem opera captação de matrículas há 9 anos.",
    items: [
      { title: "Aquisição multicanal", text: "Não dependemos só de tráfego pago. Em instituições parceiras, mais de 50% das matrículas do mês não vêm do tráfego pago daquele mês." },
      { title: "Geração e qualificação de lead", text: "A gente atrai e separa quem está pronto. O vendedor não perde tempo com curioso." },
      { title: "Condução até a conversão", text: "Conduzimos cada lead até o ponto de virada: a visita agendada ou o pedido de matrícula no WhatsApp." },
      { title: "Follow-up e reativação", text: "Quem não fechou na hora é retomado. Visitou e não voltou, conversou e sumiu: tudo volta para o jogo." },
      { title: "A ponta fica com você", text: "Recebemos o lead, montamos o funil e entregamos a oportunidade pronta. A instituição só converte." },
      { title: "Operação sem horas vagas", text: "Você não monta nada nem aprende funil nas horas vagas. Nós operamos a captação. Você matricula." }
    ]
  },
  cases: {
    title: "Não é mais um curso, nem mais um freelancer de tráfego.",
    body: "A Blumel entra para operar a captação inteira. A instituição recebe a oportunidade pronta para converter visita ou fechar o pedido no WhatsApp.",
    items: [
      { name: "Não é mentoria", result: "Execução", text: "Você não vai aprender a fazer nas horas vagas. Quem faz somos nós." },
      { name: "Não é tráfego avulso", result: "Funil", text: "Subir campanha não resolve sozinho. Tráfego é uma peça de um funil inteiro." },
      { name: "Não é contratar mais vendedor", result: "Estrutura", text: "O gargalo não é gente. É processo, canal, condução e follow-up." },
      { name: "Não é só IA de atendimento", result: "Estratégia", text: "IA sem estratégia por trás é só velocidade para perder lead do mesmo jeito." }
    ]
  },
  future: {
    title: "A vida depois que a captação deixa de depender só do tráfego.",
    items: [
      { title: "Outros canais sustentando o mês", text: "A captação não fica refém do anúncio do mês ou de uma única fonte de demanda." },
      { title: "Custo por matrícula menor", text: "O mesmo lead rende mais, o aluno é melhor conduzido e a decisão acontece mais rápido." },
      { title: "Sem inchar verba nem time", text: "A instituição usa a mesma estrutura comercial com mais resultado na ponta." },
      { title: "Funil operado por quem faz há 9 anos", text: "Você não vira gestor de tráfego, gestor de funil ou especialista em automação." },
      { title: "A escola faz só a ponta", text: "Converter a visita que chega pronta ou tirar o pedido de matrícula no WhatsApp." }
    ]
  },
  authority: {
    title: "Lucas Blumel construiu um ecossistema de matrículas para instituições de ensino.",
    body: "Nos últimos 9 anos, a Blumel replicou esse método em mais de 2.500 instituições, entre escolas profissionalizantes, faculdades, escolas de idiomas, técnico, EJA, escolas regulares e educação infantil. A especialidade é operar a captação de ponta a ponta para a instituição focar na conversão final.",
    person: {
      name: "Lucas Blumel",
      role: "fundador da Blumel",
      quote: "A instituição não precisa de mais uma peça solta. Precisa de um funil completo, operado por quem entende o caminho da matrícula.",
      photo: ""
    },
    metrics: [
      { value: "9 anos", label: "operando captação educacional" },
      { value: "2.500+", label: "instituições de ensino" },
      { value: "+400 mil", label: "matrículas geradas" }
    ]
  },
  diagnostic: {
    title: "O que você sai sabendo no diagnóstico",
    items: [
      { title: "Canais além do tráfego pago", text: "Quais fontes de aquisição cabem na sua instituição e podem sustentar matrículas em paralelo." },
      { title: "Onde o funil perde matrícula", text: "O ponto em que o lead esfria, some ou chega despreparado para a conversão." },
      { title: "Redução de custo por matrícula", text: "Quanto dá para melhorar quando a estrutura conduz melhor cada oportunidade gerada." },
      { title: "Mapa real da operação", text: "Você sai com um diagnóstico concreto da captação, qualificação, follow-up e conversão." }
    ]
  },
  fit: {
    title: "Esse diagnóstico é para instituições que querem matricular com estrutura.",
    yes: [
      "Escolas, faculdades, cursos técnicos, profissionalizantes, idiomas, EJA ou educação infantil.",
      "Instituições que faturam de R$30k a R$500k+ por mês.",
      "Operações que querem depender menos de tráfego pago e improviso comercial."
    ],
    no: [
      "Quem quer apenas desconto, mensalidade menor ou mais verba de anúncio.",
      "Quem procura mentoria para executar sozinho nas horas vagas.",
      "Quem não quer medir lead, visita, follow-up e custo por matrícula."
    ]
  },
  faq: [
    { q: "O diagnóstico tem custo?", a: "Não. Ele serve para entender sua operação atual, os canais possíveis e onde o funil está perdendo matrículas." },
    { q: "A Blumel faz só tráfego pago?", a: "Não. Tráfego é apenas um canal. O trabalho envolve aquisição multicanal, qualificação, condução, follow-up e entrega da oportunidade pronta." },
    { q: "Minha escola precisa contratar mais vendedores?", a: "Não necessariamente. A proposta é fazer o mesmo time receber oportunidades mais preparadas, com menos improviso e mais condução." },
    { q: "Isso funciona para qual tipo de instituição?", a: "Escolas profissionalizantes, faculdades, idiomas, técnico, EJA, escolas regulares e educação infantil podem aplicar o diagnóstico." }
  ],
  final: {
    title: "Pronto para descobrir onde sua instituição está perdendo matrículas?",
    body: "No diagnóstico 1:1, um estrategista identifica os pontos onde seu funil está furado, da captação ao fechamento da matrícula, e mostra como crescer sem depender de vendedor estrela ou de mais tráfego caro."
  },
  calendar: {
    title: "Agora escolha o melhor horário para o diagnóstico.",
    body: "Depois de responder o quiz, selecione um dia e horário no calendário abaixo. Assim, o estrategista já recebe seu contexto antes da conversa.",
    url: "https://calendly.com/blumel/diagnostico"
  },
  form: {
    title: "Solicitar diagnóstico gratuito",
    time: "~ 60 segundos",
    success: "Aplicação registrada. Um estrategista da Blumel entrará em contato para confirmar os próximos passos.",
    steps: [
      {
        id: "segmento",
        label: "Instituição",
        title: "Qual tipo de instituição você representa?",
        help: "Isso ajuda a entender o ciclo de captação e matrícula.",
        type: "choice",
        required: true,
        options: ["Escola profissionalizante", "Faculdade", "Escola de idiomas", "Curso técnico", "EJA", "Escola regular", "Educação infantil", "Outro"]
      },
      {
        id: "perfil",
        label: "Perfil",
        title: "Qual é o seu papel hoje na instituição?",
        help: "A conversa muda quando falamos com mantenedor, diretor ou líder comercial.",
        type: "choice",
        required: true,
        options: ["Mantenedor / Sócio", "Diretor", "Coordenador comercial", "Marketing", "Secretaria / Atendimento", "Outro"]
      },
      {
        id: "receita",
        label: "Faturamento",
        title: "Qual o faturamento mensal aproximado?",
        help: "A análise muda conforme maturidade, verba, ticket e volume de matrículas.",
        type: "choice",
        required: true,
        options: ["Abaixo de R$30 mil", "Entre R$30 mil e R$50 mil", "Entre R$50 mil e R$100 mil", "Entre R$100 mil e R$300 mil", "Entre R$300 mil e R$500 mil", "Acima de R$500 mil"]
      },
      {
        id: "contato",
        label: "Contato",
        title: "Quase lá. Onde a Blumel te encontra?",
        help: "Um estrategista entra em contato para confirmar o diagnóstico.",
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
        ${brandMark()}
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
          <small class="hero-microcopy">Diagnóstico gratuito, com mapa real da sua captação antes de qualquer proposta.</small>
        </div>
        <div class="stat-row">${config.hero.stats.map(stat).join("")}</div>
        ${conversionRail()}
      </div>
    </section>
  `;
}

function brandMark() {
  if (config.brand.logo) {
    return `<span class="brand-mark brand-logo"><img src="${escapeHtml(config.brand.logo)}" alt="" aria-hidden="true"></span>`;
  }
  return `<span class="brand-mark">${escapeHtml(config.brand.mark)}</span>`;
}

function conversionRail() {
  const items = [
    ["Aquisição", "canais além do tráfego pago"],
    ["Condução", "lead guiado até visita ou WhatsApp"],
    ["Conversão", "oportunidade pronta para matrícula"]
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
        <div class="fit-column no">${list("Não serve se", config.fit.no)}</div>
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
        <div class="footer-brand">
          ${brandMark()}
          <strong>${escapeHtml(config.brand.name)}</strong>
        </div>
        <p>Ecossistema de captação para escolas e faculdades que querem matricular mais rápido e mais barato.</p>
      </div>
      <div>
        <strong>Navegar</strong>
        <a href="#para-quem">Para quem e</a>
        <a href="#processo">Processo</a>
        <a href="#cases">Cases</a>
        <a href="#faq">FAQ</a>
      </div>
      <div>
        <strong>Diagnóstico</strong>
        <button data-open-form type="button">Quero meu diagnóstico gratuito</button>
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
  notify("Quiz concluído. Agora escolha o horário do diagnóstico.");
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
      <div class="step-meta"><span>Quiz concluído</span><span>Agendamento</span></div>
      <h2 id="leadTitle">${escapeHtml(calendar.title)}</h2>
      <p>${escapeHtml(calendar.body)}</p>
      <div class="calendar-embed">
        <iframe
          title="Agenda do diagnóstico Blumel"
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
      <p>Edite o JSON para replicar o mesmo formato com outra promessa, mercado, mecanismo e formulário.</p>
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
    notify(`JSON inválido: ${error.message}`);
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
