const STORAGE_KEY = "montador-pareceres-v1";

const bnccObjectives = [
  ["O eu, o outro e o n\u00f3s", [["EI03EO01", "Demonstrar empatia pelos outros e perceber diferentes sentimentos e necessidades."], ["EI03EO02", "Agir com independ\u00eancia e confian\u00e7a, reconhecendo conquistas e limita\u00e7\u00f5es."], ["EI03EO03", "Ampliar rela\u00e7\u00f5es interpessoais, com participa\u00e7\u00e3o e coopera\u00e7\u00e3o."], ["EI03EO04", "Comunicar ideias e sentimentos a pessoas e grupos diversos."], ["EI03EO05", "Valorizar o pr\u00f3prio corpo e respeitar as caracter\u00edsticas dos outros."], ["EI03EO06", "Manifestar interesse e respeito por diferentes culturas e modos de vida."], ["EI03EO07", "Usar estrat\u00e9gias de respeito m\u00fatuo para lidar com conflitos."]]],
  ["Corpo, gestos e movimentos", [["EI03CG01", "Criar com o corpo formas de expressar sentimentos, sensa\u00e7\u00f5es e emo\u00e7\u00f5es."], ["EI03CG02", "Demonstrar controle e adequa\u00e7\u00e3o do corpo em brincadeiras, jogos e atividades art\u00edsticas."], ["EI03CG03", "Criar movimentos, gestos, olhares e m\u00edmicas em brincadeiras e atividades art\u00edsticas."], ["EI03CG04", "Adotar h\u00e1bitos de autocuidado ligados \u00e0 higiene, alimenta\u00e7\u00e3o, conforto e apar\u00eancia."], ["EI03CG05", "Coordenar habilidades manuais conforme interesses e necessidades."]]],
  ["Tra\u00e7os, sons, cores e formas", [["EI03TS01", "Utilizar sons de materiais, objetos e instrumentos em brincadeiras e cria\u00e7\u00f5es."], ["EI03TS02", "Expressar-se por desenho, pintura, colagem, dobradura e escultura."], ["EI03TS03", "Reconhecer qualidades do som e utiliz\u00e1-las em produ\u00e7\u00f5es sonoras."]]],
  ["Escuta, fala, pensamento e imagina\u00e7\u00e3o", [["EI03EF01", "Expressar ideias, desejos e sentimentos sobre viv\u00eancias por diferentes linguagens."], ["EI03EF02", "Inventar brincadeiras cantadas, poemas e can\u00e7\u00f5es com rimas e ritmos."], ["EI03EF03", "Escolher e folhear livros, orientando-se por temas e ilustra\u00e7\u00f5es."], ["EI03EF04", "Recontar hist\u00f3rias e planejar coletivamente roteiros de encena\u00e7\u00f5es."], ["EI03EF05", "Recontar hist\u00f3rias para produ\u00e7\u00e3o escrita, com o professor como escriba."], ["EI03EF06", "Produzir hist\u00f3rias orais e escritas em situa\u00e7\u00f5es com fun\u00e7\u00e3o social."], ["EI03EF07", "Levantar hip\u00f3teses sobre g\u00eaneros textuais em portadores conhecidos."], ["EI03EF08", "Selecionar livros e textos conhecidos para leitura pr\u00f3pria ou de um adulto."], ["EI03EF09", "Levantar hip\u00f3teses sobre a escrita, registrando palavras e textos espontaneamente."]]],
  ["Espa\u00e7os, tempos, quantidades, rela\u00e7\u00f5es e transforma\u00e7\u00f5es", [["EI03ET01", "Comparar objetos, observando suas propriedades."], ["EI03ET02", "Observar e descrever mudan\u00e7as em materiais em experimentos."], ["EI03ET03", "Selecionar fontes de informa\u00e7\u00e3o sobre natureza, fen\u00f4menos e conserva\u00e7\u00e3o."], ["EI03ET04", "Registrar observa\u00e7\u00f5es, manipula\u00e7\u00f5es e medidas em diferentes linguagens."], ["EI03ET05", "Classificar objetos e figuras por semelhan\u00e7as e diferen\u00e7as."], ["EI03ET06", "Relatar fatos sobre sua hist\u00f3ria, fam\u00edlia e comunidade."], ["EI03ET07", "Relacionar n\u00fameros a quantidades e identificar posi\u00e7\u00f5es em sequ\u00eancias."], ["EI03ET08", "Expressar medidas e construir gr\u00e1ficos b\u00e1sicos."]]],
];

const recordSources = ["Anota\u00e7\u00f5es da professora", "Produ\u00e7\u00f5es da crian\u00e7a", "Desenhos", "Fotografias", "Portf\u00f3lio", "Relatos e falas da crian\u00e7a"];

const dimensions = [
  {
    id: "participacao",
    title: "Participa\u00e7\u00e3o e brincadeira",
    icon: "\u2726",
    hint: "Como participa das propostas e brincadeiras?",
    bncc: "Direitos de participar, brincar e explorar",
    options: [
      ["observa", "Observa antes de se envolver", "Nas propostas acompanhadas, observou o grupo antes de se envolver nas a\u00e7\u00f5es."],
      ["pequenos-grupos", "Participa melhor em pequenos grupos", "Em pequenos grupos, participou das propostas com maior envolvimento."],
      ["propoe", "Prop\u00f5e ideias e caminhos", "Passou a propor ideias e caminhos durante as experi\u00eancias compartilhadas."],
      ["apoio-participacao", "Participa com media\u00e7\u00e3o", "Com a media\u00e7\u00e3o do adulto, ampliou sua participa\u00e7\u00e3o nas propostas."],
    ],
  },
  {
    id: "interacoes",
    title: "Desenvolvimento social e emocional",
    icon: "\u25ce",
    hint: "Como convive, expressa emo\u00e7\u00f5es e lida com outras pessoas?",
    bncc: "O eu, o outro e o n\u00f3s",
    options: [
      ["convida", "Convida colegas para brincar", "Convidou colegas para participar das brincadeiras e propostas."],
      ["compartilha", "Compartilha materiais e ideias", "Compartilhou materiais e ideias nas experi\u00eancias em grupo."],
      ["acordos", "Constr\u00f3i acordos com apoio", "Com apoio, participou da constru\u00e7\u00e3o de acordos nas situa\u00e7\u00f5es de conviv\u00eancia."],
      ["aproxima", "Aproxima-se gradualmente", "Aproximou-se gradualmente dos colegas nas situa\u00e7\u00f5es acompanhadas."],
      ["sentimentos", "Comunica sentimentos e necessidades", "Comunicou sentimentos e necessidades nas situa\u00e7\u00f5es de conviv\u00eancia."],
      ["empatia", "Percebe e acolhe sentimentos dos outros", "Demonstrou aten\u00e7\u00e3o aos sentimentos e \u00e0s necessidades de outras crian\u00e7as."],
    ],
  },
  {
    id: "linguagem",
    title: "Linguagem e comunica\u00e7\u00e3o",
    icon: "\u25cc",
    hint: "Quais recursos usa para comunicar ideias?",
    bncc: "Escuta, fala, pensamento e imagina\u00e7\u00e3o",
    options: [
      ["relata", "Relata acontecimentos", "Relatou acontecimentos e sequ\u00eancias vividas nas brincadeiras."],
      ["pergunta", "Faz perguntas e levanta hip\u00f3teses", "Fez perguntas e compartilhou hip\u00f3teses durante as investiga\u00e7\u00f5es."],
      ["gestos", "Comunica-se por gestos e express\u00f5es", "Utilizou gestos e express\u00f5es para comunicar escolhas e interesses."],
      ["escuta", "Escuta e responde aos colegas", "Escutou os colegas e respondeu \u00e0s suas coloca\u00e7\u00f5es nas conversas acompanhadas."],
    ],
  },
  {
    id: "autonomia",
    title: "Autonomia e cuidados",
    icon: "\u25c7",
    hint: "Em quais situa\u00e7\u00f5es age com ou sem apoio?",
    bncc: "O eu, o outro e o n\u00f3s \u00b7 Corpo, gestos e movimentos",
    options: [
      ["materiais", "Organiza materiais com lembretes", "Organizou os materiais ap\u00f3s lembretes da professora."],
      ["escolhas", "Faz escolhas nas propostas", "Fez escolhas entre materiais e possibilidades durante as propostas."],
      ["rotina", "Realiza a\u00e7\u00f5es da rotina com autonomia", "Realizou a\u00e7\u00f5es da rotina com autonomia nas situa\u00e7\u00f5es observadas."],
      ["busca-apoio", "Busca apoio quando necess\u00e1rio", "Buscou apoio do adulto quando encontrou dificuldades."],
    ],
  },
  {
    id: "experiencias",
    title: "Cogni\u00e7\u00e3o e investiga\u00e7\u00e3o",
    icon: "\u25b3",
    hint: "Como observa, compara, pergunta e constr\u00f3i rela\u00e7\u00f5es?",
    bncc: "Espa\u00e7os, tempos, quantidades, rela\u00e7\u00f5es e transforma\u00e7\u00f5es",
    options: [
      ["compara", "Compara tamanhos e quantidades", "Comparou tamanhos e quantidades ao explorar materiais."],
      ["hipoteses", "Levanta hip\u00f3teses e busca respostas", "Levantou hip\u00f3teses e buscou respostas durante situa\u00e7\u00f5es de investiga\u00e7\u00e3o."],
      ["classifica", "Agrupa e classifica elementos", "Agrupou e classificou elementos ao observar semelhan\u00e7as e diferen\u00e7as."],
      ["transformacoes", "Observa mudan\u00e7as e transforma\u00e7\u00f5es", "Observou mudan\u00e7as e transforma\u00e7\u00f5es em materiais e elementos da natureza."],
      ["sequencias", "Organiza sequ\u00eancias e rela\u00e7\u00f5es", "Organizou sequ\u00eancias e estabeleceu rela\u00e7\u00f5es de quantidade, posi\u00e7\u00e3o e ordem."],
    ],
  },
  {
    id: "motor",
    title: "Corpo e desenvolvimento motor",
    icon: "\u219d",
    hint: "Como usa o corpo, os gestos e as habilidades manuais?",
    bncc: "Corpo, gestos e movimentos",
    options: [
      ["movimentos", "Explora movimentos e espa\u00e7os", "Explorou movimentos e diferentes formas de deslocamento nas brincadeiras corporais."],
      ["equilibrio", "Amplia equil\u00edbrio e coordena\u00e7\u00e3o", "Demonstrou progressos no equil\u00edbrio e na coordena\u00e7\u00e3o durante jogos e percursos."],
      ["gestos", "Expressa-se com gestos e movimentos", "Utilizou gestos, movimentos e express\u00f5es corporais para comunicar ideias e emo\u00e7\u00f5es."],
      ["manual", "Coordena a\u00e7\u00f5es manuais", "Coordenou movimentos das m\u00e3os ao encaixar, recortar, modelar, desenhar e manusear diferentes materiais."],
      ["ritmo", "Participa de dan\u00e7as e brincadeiras r\u00edtmicas", "Participou de dan\u00e7as e brincadeiras r\u00edtmicas, ajustando movimentos \u00e0s propostas."],
    ],
  },
  {
    id: "expressao",
    title: "Express\u00f5es art\u00edsticas",
    icon: "\u270e",
    hint: "Como cria com tra\u00e7os, sons, cores, formas e imagina\u00e7\u00e3o?",
    bncc: "Tra\u00e7os, sons, cores e formas",
    options: [
      ["desenho", "Cria com desenho, pintura e colagem", "Expressou ideias e experi\u00eancias por meio de desenhos, pinturas, colagens e outras produ\u00e7\u00f5es visuais."],
      ["materiais", "Explora materiais e possibilidades", "Explorou cores, texturas, formas e volumes ao criar com diferentes materiais."],
      ["sons", "Cria e reconhece sons", "Explorou sons, ritmos e instrumentos em brincadeiras e produ\u00e7\u00f5es musicais."],
      ["faz-de-conta", "Cria enredos no faz de conta", "Criou personagens, enredos e situa\u00e7\u00f5es durante as brincadeiras de faz de conta."],
    ],
  },
  {
    id: "percurso",
    title: "Percurso no per\u00edodo",
    icon: "\u2197",
    hint: "Que mudan\u00e7a aparece em diferentes registros?",
    bncc: "Progress\u00e3o observada no per\u00edodo",
    options: [
      ["ampliou", "Ampliou a participa\u00e7\u00e3o", "Ao longo do per\u00edodo acompanhado, ampliou sua participa\u00e7\u00e3o nas propostas."],
      ["iniciativa", "Passou a tomar mais iniciativa", "Os registros mais recentes mostram maior iniciativa nas situa\u00e7\u00f5es acompanhadas."],
      ["apoio-mantido", "Ainda precisa de apoio em algumas situa\u00e7\u00f5es", "A media\u00e7\u00e3o do adulto permanece importante em algumas situa\u00e7\u00f5es."],
      ["sem-comparacao", "N\u00e3o h\u00e1 registros suficientes para comparar", ""],
    ],
  },
];

const sections = [
  ["home", "\u2302", "In\u00edcio"],
  ["context", "01", "Contexto"],
  ["observations", "02", "Observa\u00e7\u00f5es"],
  ["review", "03", "Revisar parecer"],
  ["reports", "04", "Meus pareceres"],
  ["library", "\u2606", "Modelos e frases"],
  ["help", "?", "Como usar"],
];

const initialState = {
  route: "home",
  currentId: null,
  draft: emptyDraft(),
  reports: [],
};

function emptyDraft() {
  return {
    childName: "",
    stage: "",
    period: "",
    school: "",
    group: "",
    teacher: "",
    attendance: "",
    schoolGuidance: "",
    recordSources: [],
    bnccRequired: false,
    bnccCodes: [],
    generatorVersion: 5,
    selected: {},
    evidence: {},
    text: "",
    updatedAt: null,
  };
}

let state = loadState();

const main = document.querySelector("#main");
const nav = document.querySelector("#nav");
const toast = document.querySelector("#toast");
const dialog = document.querySelector("#confirmDialog");

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!saved) return structuredClone(initialState);
    const reports = (saved.reports || []).map(report => ({ ...emptyDraft(), ...report, generatorVersion: report.generatorVersion || 1 }));
    return { ...initialState, ...saved, reports, draft: { ...emptyDraft(), ...saved.draft, generatorVersion: saved.draft?.generatorVersion || 1 } };
  } catch {
    return structuredClone(initialState);
  }
}

function persist() {
  state.draft.updatedAt = new Date().toISOString();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function escapeHTML(value = "") {
  return String(value).replace(/[&<>"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[char]);
}

function setRoute(route) {
  state.route = route;
  persist();
  render();
  main.focus();
  document.body.classList.remove("menu-open");
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("visible");
  window.setTimeout(() => toast.classList.remove("visible"), 2400);
}

function renderNav() {
  nav.innerHTML = sections.map(([id, icon, label]) => `
    <button class="nav-item ${state.route === id ? "active" : ""}" data-route="${id}" type="button">
      <span>${icon}</span><span>${label}</span>
    </button>`).join("");
  nav.querySelectorAll("[data-route]").forEach(button => button.addEventListener("click", () => setRoute(button.dataset.route)));
}

function render() {
  renderNav();
  const renderers = { home: renderHome, context: renderContext, observations: renderObservations, review: renderReview, reports: renderReports, library: renderLibrary, help: renderHelp };
  main.innerHTML = renderers[state.route]();
  bindRouteEvents();
  updateProgress();
}

function updateProgress() {
  const order = ["home", "context", "observations", "review", "reports"];
  const labels = { home: "In\u00edcio", context: "Contexto", observations: "Observa\u00e7\u00f5es", review: "Revis\u00e3o", reports: "Organiza\u00e7\u00e3o", library: "Consulta", help: "Ajuda" };
  const index = Math.max(0, order.indexOf(state.route));
  document.querySelector("#progressLabel").textContent = labels[state.route];
  document.querySelector("#progressBar").style.width = state.route === "library" || state.route === "help" ? "100%" : `${(index / 4) * 100}%`;
}

function pageHeader(eyebrow, title, description) {
  return `<div class="page-header"><span class="eyebrow">${eyebrow}</span><h1>${title}</h1><p>${description}</p></div>`;
}

function renderHome() {
  const draftExists = state.draft.childName || Object.keys(state.draft.selected).length;
  return `
    <section class="hero-grid">
      <div class="hero-copy">
        <span class="eyebrow">Montador por caracter\u00edsticas observadas</span>
        <h1>Vamos montar o pr\u00f3ximo parecer?</h1>
        <p class="lead">Transforme observa\u00e7\u00f5es di\u00e1rias em uma narrativa do desenvolvimento social, emocional, motor, cognitivo e expressivo da crian\u00e7a, alinhada aos campos de experi\u00eancia da BNCC.</p>
        <div class="hero-actions">
          <button class="button button-primary button-large" data-route="context">${draftExists ? "Continuar parecer" : "Come\u00e7ar um parecer"} <span>\u2192</span></button>
          <button class="button button-ghost" data-route="reports">Ver meus pareceres</button>
        </div>
        <div class="trust-line"><span>\u2713</span> A ferramenta organiza a escrita. A avalia\u00e7\u00e3o continua sendo da professora.</div>
      </div>
      <div class="hero-visual" aria-label="Fluxo da observa\u00e7\u00e3o ao parecer">
        <div class="visual-note note-observation"><small>O que aconteceu</small><strong>Convidou colegas para construir uma torre com blocos.</strong></div>
        <span class="flow-arrow">\u2192</span>
        <div class="visual-note note-report"><small>Como aparece no texto</small><strong>Nas brincadeiras de constru\u00e7\u00e3o, convidou colegas para participar.</strong></div>
      </div>
    </section>
    <section class="section-block">
      <div class="section-heading"><div><span class="eyebrow">Um caminho claro</span><h2>Do registro ao texto revisado</h2></div><span class="muted">3 etapas</span></div>
      <div class="step-grid">
        <article class="step-card"><span class="step-number">1</span><div><h3>Defina o contexto</h3><p>Identifique a crian\u00e7a, a etapa e o per\u00edodo acompanhado.</p></div></article>
        <article class="step-card"><span class="step-number">2</span><div><h3>Selecione observa\u00e7\u00f5es</h3><p>Escolha somente situa\u00e7\u00f5es que seus registros sustentam.</p></div></article>
        <article class="step-card"><span class="step-number">3</span><div><h3>Revise o parecer</h3><p>Confira nome, per\u00edodo, fatos, apoios e linguagem.</p></div></article>
      </div>
    </section>`;
}

function renderContext() {
  const d = state.draft;
  return `${pageHeader("Etapa 1 de 3", "Comece pelo contexto deste parecer", "A estrutura pode se repetir. As evid\u00eancias precisam representar cada crian\u00e7a.")}
    <div class="content-grid">
      <section class="panel form-panel">
        <div class="panel-title"><span class="panel-icon">01</span><div><h2>Identifica\u00e7\u00e3o do parecer</h2><p>Use apenas os dados necess\u00e1rios para distinguir o documento.</p></div></div>
        <label>Nome da crian\u00e7a<input id="childName" maxlength="80" value="${escapeHTML(d.childName)}" placeholder="Ex.: Ana" autocomplete="off" /></label>
        <fieldset><legend>Etapa</legend><div class="segmented">
          <label><input type="radio" name="stage" value="Pr\u00e9 I" ${d.stage === "Pr\u00e9 I" ? "checked" : ""} /><span>Pr\u00e9 I</span></label>
          <label><input type="radio" name="stage" value="Pr\u00e9 II" ${d.stage === "Pr\u00e9 II" ? "checked" : ""} /><span>Pr\u00e9 II</span></label>
        </div></fieldset>
        <label>Per\u00edodo acompanhado<input id="period" maxlength="100" value="${escapeHTML(d.period)}" placeholder="Ex.: segundo semestre" /></label>
        <div class="field-pair"><label>Institui\u00e7\u00e3o <span class="optional">se exigido</span><input id="school" maxlength="100" value="${escapeHTML(d.school)}" /></label><label>Turma <span class="optional">se exigido</span><input id="group" maxlength="60" value="${escapeHTML(d.group)}" /></label></div>
        <div class="field-pair"><label>Professora respons\u00e1vel <span class="optional">se exigido</span><input id="teacher" maxlength="100" value="${escapeHTML(d.teacher)}" /></label><label>Frequ\u00eancia <span class="optional">se exigida pela rede</span><input id="attendance" maxlength="30" value="${escapeHTML(d.attendance)}" placeholder="Ex.: 92%" /></label></div>
        <fieldset><legend>Registros consultados <span class="optional">selecione os que sustentam este parecer</span></legend><div class="source-grid">${recordSources.map(source => `<label class="source-chip"><input type="checkbox" name="recordSource" value="${source}" ${(d.recordSources || []).includes(source) ? "checked" : ""}/><span>${source}</span></label>`).join("")}</div></fieldset>
        <fieldset class="institution-rule"><legend>Minha institui\u00e7\u00e3o exige c\u00f3digos BNCC no documento?</legend><div class="segmented">
          <label><input type="radio" name="bnccRequired" value="no" ${!d.bnccRequired ? "checked" : ""} /><span>N\u00e3o / n\u00e3o informou</span></label>
          <label><input type="radio" name="bnccRequired" value="yes" ${d.bnccRequired ? "checked" : ""} /><span>Sim</span></label>
        </div><p class="field-help">A legisla\u00e7\u00e3o nacional n\u00e3o obriga c\u00f3digos no parecer individual. Ative somente quando a rede ou a escola solicitar.</p></fieldset>
        <label>Orienta\u00e7\u00e3o da institui\u00e7\u00e3o <span class="optional">opcional</span><textarea id="schoolGuidance" rows="3" maxlength="400" placeholder="Ex.: texto em tr\u00eas par\u00e1grafos, sem c\u00f3digos da BNCC">${escapeHTML(d.schoolGuidance)}</textarea></label>
        <div class="form-actions"><button class="button button-primary" id="goObservations">Continuar para observa\u00e7\u00f5es \u2192</button></div>
      </section>
      <aside class="insight-column">
        <article class="insight-card success"><span>\u2713</span><div><h3>H\u00e1 base para avan\u00e7ar quando...</h3><p>Existem situa\u00e7\u00f5es concretas e um per\u00edodo definido.</p></div></article>
        <article class="insight-card warning"><span>!</span><div><h3>Pare antes de concluir quando...</h3><p>H\u00e1 apenas uma impress\u00e3o geral, sem um fato que a sustente.</p></div></article>
        <article class="mini-card"><h3>Base nacional + regra local</h3><p>LDB, DCNEI e BNCC orientam a avalia\u00e7\u00e3o. Cabe \u00e0 rede ou institui\u00e7\u00e3o definir campos adicionais, assinaturas e apresenta\u00e7\u00e3o.</p></article>
      </aside>
    </div>`;
}

function renderObservations() {
  const cards = dimensions.map(dimension => {
    const selected = state.draft.selected[dimension.id] || [];
    const unavailable = selected.includes("sem-registro");
    return `<article class="dimension-card ${unavailable ? "unavailable" : ""}" data-dimension="${dimension.id}">
      <div class="dimension-head"><span>${dimension.icon}</span><div><h2>${dimension.title}</h2><p>${dimension.hint}</p><small class="field-tag">${dimension.bncc}</small></div></div>
      <div class="option-list">
        ${dimension.options.map(([id, label]) => `<label class="option"><input type="checkbox" value="${id}" ${selected.includes(id) ? "checked" : ""} ${unavailable ? "disabled" : ""}/><span class="checkmark">\u2713</span><span>${label}</span></label>`).join("")}
        <label class="option option-muted"><input type="checkbox" value="sem-registro" ${unavailable ? "checked" : ""}/><span class="checkmark">\u2014</span><span>N\u00e3o tenho registros suficientes</span></label>
      </div>
      <label class="evidence-field">Exemplo concreto <span class="optional">recomendado</span><textarea rows="2" maxlength="300" ${unavailable ? "disabled" : ""} placeholder="Uma situa\u00e7\u00e3o breve que voc\u00ea realmente observou">${escapeHTML(state.draft.evidence[dimension.id] || "")}</textarea></label>
    </article>`;
  }).join("");
  const bnccPanel = state.draft.bnccRequired ? renderBnccPanel() : "";
  return `${pageHeader("Etapa 2 de 3", "O que voc\u00ea observou nesta crian\u00e7a?", "Percorra as dimens\u00f5es do desenvolvimento integral e selecione somente caracter\u00edsticas sustentadas pelos registros do per\u00edodo.")}
    <div class="observation-toolbar"><div><strong id="selectionCount">${countSelections()} observa\u00e7\u00f5es selecionadas</strong><span> \u2022 ${countEvidence()} exemplos concretos</span></div><button class="button button-secondary" id="fillExample">Ver exemplo fict\u00edcio</button></div>
    <section class="dimension-grid">${cards}</section>${bnccPanel}
    <div class="sticky-action"><div><strong>Sem registro suficiente?</strong><span> A conclus\u00e3o sobre esse aspecto ficar\u00e1 fora do texto.</span></div><button class="button button-primary" id="generateReport">Montar primeira vers\u00e3o \u2192</button></div>`;
}

function renderBnccPanel() {
  return `<section class="bncc-panel"><div class="bncc-head"><div><span class="eyebrow">Exig\u00eancia institucional</span><h2>Refer\u00eancias curriculares BNCC</h2><p>Selecione apenas objetivos relacionados \u00e0s experi\u00eancias realmente observadas. Os c\u00f3digos identificam objetivos; n\u00e3o s\u00e3o notas, n\u00edveis nem uma lista a cumprir.</p></div><span class="bncc-age">EI03 \u00b7 4 anos a 5 anos e 11 meses</span></div>
    <div class="bncc-fields">${bnccObjectives.map(([field, objectives]) => `<details><summary>${field}<span>${objectives.filter(([code]) => (state.draft.bnccCodes || []).includes(code)).length} selecionados</span></summary><div class="bncc-options">${objectives.map(([code, description]) => `<label class="bncc-option"><input type="checkbox" name="bnccCode" value="${code}" ${(state.draft.bnccCodes || []).includes(code) ? "checked" : ""}/><span><strong>${code}</strong>${description}</span></label>`).join("")}</div></details>`).join("")}</div>
    <p class="field-help">Pr\u00e9 I e Pr\u00e9 II s\u00e3o nomes locais. Confirme se a crian\u00e7a est\u00e1 no grupo BNCC EI03; as faixas et\u00e1rias s\u00e3o aproximadas e n\u00e3o devem ser usadas rigidamente.</p></section>`;
}

function renderReview() {
  const needsUpgrade = state.draft.generatorVersion !== 5;
  const text = needsUpgrade || !state.draft.text ? generateReportText() : state.draft.text;
  if ((needsUpgrade || !state.draft.text) && text) { state.draft.text = text; state.draft.generatorVersion = 5; persist(); }
  const checks = reviewChecks(text);
  return `${pageHeader("Etapa 3 de 3", "Seu parecer, pronto para revisar", "A primeira vers\u00e3o organiza as observa\u00e7\u00f5es. A revis\u00e3o confirma o que pode permanecer.")}
    <div class="review-layout">
      <section class="panel editor-panel">
        <div class="document-meta"><div><span class="status-dot"></span><strong>${escapeHTML(state.draft.childName || "Parecer sem nome")}</strong><small>${escapeHTML([state.draft.stage, state.draft.period].filter(Boolean).join(" \u2022 "))}</small></div><span class="draft-badge">Rascunho para revis\u00e3o</span></div>
        <textarea id="reportText" class="report-editor" aria-label="Texto do parecer">${escapeHTML(text)}</textarea>
        <div class="editor-actions"><span id="charCount">${text.length} caracteres</span><div><button class="button button-ghost" id="copyReport">Copiar texto</button><button class="button button-primary" id="saveReport">Salvar parecer</button></div></div>
      </section>
      <aside class="review-aside">
        <article class="review-card"><span class="eyebrow">Confer\u00eancia final</span><h2>Antes de concluir</h2>
          <ul class="check-list">${checks.map(c => `<li class="${c.ok ? "ok" : "attention"}"><span>${c.ok ? "\u2713" : "!"}</span><div><strong>${c.title}</strong><small>${c.detail}</small></div></li>`).join("")}</ul>
        </article>
        <article class="compare-card"><div class="bad"><span>Evite</span><p>\u201c\u00c9 totalmente independente.\u201d</p></div><div class="good"><span>Prefira o observ\u00e1vel</span><p>\u201cOrganizou os materiais ap\u00f3s lembretes da professora.\u201d</p></div></article>
      </aside>
    </div>`;
}

function renderReports() {
  const reports = [...state.reports].sort((a,b) => new Date(b.updatedAt) - new Date(a.updatedAt));
  return `${pageHeader("Organiza\u00e7\u00e3o", "Meus pareceres", "Um documento por crian\u00e7a. Um pr\u00f3ximo passo claro para cada situa\u00e7\u00e3o.")}
    <div class="reports-head"><div class="metric"><strong>${reports.length}</strong><span>pareceres neste navegador</span></div><button class="button button-primary" id="newReport">+ Novo parecer</button></div>
    ${reports.length ? `<section class="reports-grid">${reports.map(report => `<article class="report-card">
      <div class="report-card-head"><div class="avatar">${escapeHTML(report.childName?.[0]?.toUpperCase() || "?")}</div><div><h2>${escapeHTML(report.childName || "Sem nome")}</h2><p>${escapeHTML([report.stage, report.period].filter(Boolean).join(" \u2022 "))}</p></div></div>
      <p class="report-preview">${escapeHTML(report.text.slice(0, 150))}${report.text.length > 150 ? "\u2026" : ""}</p>
      <div class="report-footer"><small>Atualizado ${formatDate(report.updatedAt)}</small><button class="text-button" data-open-report="${report.id}">Abrir parecer \u2192</button></div>
    </article>`).join("")}</section>` : `<div class="empty-state"><span>\u25a4</span><h2>Nenhum parecer salvo ainda</h2><p>Comece pelo contexto e avance at\u00e9 a revis\u00e3o.</p><button class="button button-primary" data-route="context">Come\u00e7ar primeiro parecer</button></div>`}
    <article class="safety-banner"><span>!</span><div><strong>Este navegador n\u00e3o substitui o sistema da escola.</strong><p>Confira onde a vers\u00e3o final precisa ser entregue e conservada pela institui\u00e7\u00e3o.</p></div></article>`;
}

function renderLibrary() {
  const samples = [
    ["Participa\u00e7\u00e3o", "Em pequenos grupos, participou das propostas com maior envolvimento."],
    ["Intera\u00e7\u00f5es", "Convidou colegas para participar das brincadeiras e propostas."],
    ["Linguagem", "Utilizou gestos, express\u00f5es e palavras para comunicar escolhas e interesses."],
    ["Autonomia", "Organizou os materiais ap\u00f3s lembretes da professora."],
    ["Experi\u00eancias", "Comparou tamanhos e quantidades ao explorar diferentes materiais."],
    ["Percurso", "Os registros mais recentes mostram maior iniciativa nas situa\u00e7\u00f5es acompanhadas."],
  ];
  return `${pageHeader("Consulta r\u00e1pida", "Modelos e frases", "Use as refer\u00eancias para encontrar uma forma de dizer sem alterar o que foi observado.")}
    <div class="library-banner"><div><span class="eyebrow">Regra de uso</span><h2>Escolha pelo significado, n\u00e3o pela palavra mais bonita.</h2><p>Uma frase s\u00f3 deve entrar no parecer quando corresponde aos registros.</p></div><span class="library-icon">\u201c \u201d</span></div>
    <section class="phrase-grid">${samples.map(([title, phrase]) => `<article class="phrase-card"><span>${title}</span><p>${phrase}</p><button class="text-button copy-phrase" data-phrase="${escapeHTML(phrase)}">Copiar frase</button></article>`).join("")}</section>
    <article class="coming-card"><div><span>20</span><p>modelos completos previstos</p></div><div><span>150</span><p>frases adapt\u00e1veis previstas</p></div><p class="coming-note">A biblioteca completa ser\u00e1 incorporada nas pr\u00f3ximas etapas do desenvolvimento.</p></article>`;
}

function renderHelp() {
  return `${pageHeader("Ajuda", "Veja como usar", "O percurso foi desenhado para caber na pr\u00f3pria tarefa, sem exigir um curso longo.")}
    <section class="help-grid">
      <article class="help-card"><span>1</span><h2>Contexto</h2><p>Identifique a crian\u00e7a, a etapa e o per\u00edodo acompanhado.</p></article>
      <article class="help-card"><span>2</span><h2>Observa\u00e7\u00f5es</h2><p>Selecione situa\u00e7\u00f5es reais e acrescente exemplos concretos quando dispon\u00edveis.</p></article>
      <article class="help-card"><span>3</span><h2>Revis\u00e3o</h2><p>Edite livremente e confira se cada afirma\u00e7\u00e3o corresponde aos registros.</p></article>
      <article class="help-card"><span>4</span><h2>Entrega</h2><p>Copie o texto revisado e adapte-o ao formato solicitado pela institui\u00e7\u00e3o.</p></article>
    </section>
    <section class="panel limits-panel"><span class="eyebrow">Limites importantes</span><h2>O que esta ferramenta n\u00e3o faz</h2><div class="limit-grid"><p>N\u00e3o avalia a crian\u00e7a automaticamente.</p><p>N\u00e3o cria fatos que n\u00e3o foram informados.</p><p>N\u00e3o produz diagn\u00f3sticos cl\u00ednicos.</p><p>N\u00e3o decide aprova\u00e7\u00e3o ou prontid\u00e3o.</p></div></section>
    <section class="panel limits-panel"><span class="eyebrow">Base normativa</span><h2>O que orienta o parecer</h2><div class="limit-grid"><p><strong>LDB:</strong> acompanhamento e registro do desenvolvimento, sem finalidade de promo\u00e7\u00e3o.</p><p><strong>DCNEI:</strong> observa\u00e7\u00e3o de atividades, brincadeiras e intera\u00e7\u00f5es, com m\u00faltiplos registros.</p><p><strong>BNCC:</strong> progress\u00e3o, direitos e campos de experi\u00eancias, sem classificar a crian\u00e7a.</p><p><strong>Regra local:</strong> a rede pode exigir campos, frequ\u00eancia, assinaturas e formato pr\u00f3prios.</p></div><p class="field-help">Os c\u00f3digos BNCC s\u00e3o opcionais no app e s\u00f3 aparecem quando a institui\u00e7\u00e3o os exige. Consulte sempre o regimento e a orienta\u00e7\u00e3o da sua rede.</p></section>`;
}

function bindRouteEvents() {
  main.querySelectorAll("[data-route]").forEach(el => el.addEventListener("click", () => setRoute(el.dataset.route)));
  if (state.route === "context") bindContext();
  if (state.route === "observations") bindObservations();
  if (state.route === "review") bindReview();
  if (state.route === "reports") bindReports();
  if (state.route === "library") bindLibrary();
}

function bindContext() {
  const sync = () => {
    state.draft.childName = document.querySelector("#childName").value.trim();
    state.draft.period = document.querySelector("#period").value.trim();
    state.draft.school = document.querySelector("#school").value.trim();
    state.draft.group = document.querySelector("#group").value.trim();
    state.draft.teacher = document.querySelector("#teacher").value.trim();
    state.draft.attendance = document.querySelector("#attendance").value.trim();
    state.draft.schoolGuidance = document.querySelector("#schoolGuidance").value.trim();
    state.draft.stage = document.querySelector('input[name="stage"]:checked')?.value || "";
    state.draft.recordSources = [...document.querySelectorAll('input[name="recordSource"]:checked')].map(input => input.value);
    state.draft.bnccRequired = document.querySelector('input[name="bnccRequired"]:checked')?.value === "yes";
    if (!state.draft.bnccRequired) state.draft.bnccCodes = [];
    persist();
  };
  main.querySelectorAll("input, textarea").forEach(el => el.addEventListener("input", sync));
  document.querySelector("#goObservations").addEventListener("click", () => {
    sync();
    if (!state.draft.childName || !state.draft.stage || !state.draft.period) return showToast("Informe nome, etapa e per\u00edodo para continuar.");
    setRoute("observations");
  });
}

function bindObservations() {
  main.querySelectorAll(".dimension-card").forEach(card => {
    const dimension = card.dataset.dimension;
    card.querySelectorAll('input[type="checkbox"]').forEach(input => input.addEventListener("change", () => {
      let selected = state.draft.selected[dimension] || [];
      if (input.value === "sem-registro") selected = input.checked ? ["sem-registro"] : [];
      else selected = input.checked ? [...new Set([...selected.filter(v => v !== "sem-registro"), input.value])] : selected.filter(v => v !== input.value);
      state.draft.selected[dimension] = selected;
      state.draft.text = "";
      persist(); render();
    }));
    card.querySelector("textarea").addEventListener("input", event => { state.draft.evidence[dimension] = event.target.value.trim(); state.draft.text = ""; persist(); updateObservationCount(); });
  });
  main.querySelectorAll('input[name="bnccCode"]').forEach(input => input.addEventListener("change", () => {
    const codes = state.draft.bnccCodes || [];
    state.draft.bnccCodes = input.checked ? [...new Set([...codes, input.value])] : codes.filter(code => code !== input.value);
    state.draft.text = ""; persist();
  }));
  document.querySelector("#fillExample").addEventListener("click", fillFictionalExample);
  document.querySelector("#generateReport").addEventListener("click", () => {
    if (!state.draft.childName || !state.draft.stage || !state.draft.period) return setRoute("context");
    if (!countSelections()) return showToast("Selecione ao menos uma observa\u00e7\u00e3o sustentada pelos registros.");
    state.draft.text = generateReportText(); state.draft.generatorVersion = 5; persist(); setRoute("review");
  });
}

function updateObservationCount() {
  const label = document.querySelector("#selectionCount");
  if (label) label.textContent = `${countSelections()} observa\u00e7\u00f5es selecionadas`;
}

function fillFictionalExample() {
  state.draft = {
    ...emptyDraft(), childName: "Ana", stage: "Pr\u00e9 II", period: "\u00faltimo per\u00edodo letivo", school: "EMEI Exemplo", group: "Pr\u00e9 II B", teacher: "Professora exemplo", recordSources: ["Anota\u00e7\u00f5es da professora", "Produ\u00e7\u00f5es da crian\u00e7a", "Fotografias"], schoolGuidance: "",
    selected: { participacao: ["propoe"], interacoes: ["convida", "sentimentos"], linguagem: ["relata"], autonomia: ["materiais"], experiencias: ["compara", "hipoteses"], motor: ["manual"], expressao: ["faz-de-conta"], percurso: ["ampliou", "apoio-mantido"] },
    evidence: { participacao: "Nos registros iniciais, observava o grupo; nos mais recentes, passou a propor constru\u00e7\u00f5es.", interacoes: "Convidou colegas para construir uma torre com blocos e explicou como gostaria de organizar a brincadeira.", linguagem: "Relatou a sequ\u00eancia da brincadeira ao pequeno grupo.", autonomia: "Guardou os blocos depois de um lembrete da professora.", experiencias: "Comparou pe\u00e7as grandes e pequenas e testou diferentes bases para sustentar a torre.", motor: "Encaixou pe\u00e7as pequenas e reposicionou os blocos com precis\u00e3o durante a constru\u00e7\u00e3o.", expressao: "Transformou a constru\u00e7\u00e3o em uma cidade e criou personagens para a brincadeira." },
    text: "", updatedAt: new Date().toISOString(),
  };
  persist(); render(); showToast("Exemplo fict\u00edcio carregado.");
}

function bindReview() {
  const editor = document.querySelector("#reportText");
  editor.addEventListener("input", () => { state.draft.text = editor.value; state.draft.generatorVersion = 5; persist(); document.querySelector("#charCount").textContent = `${editor.value.length} caracteres`; });
  document.querySelector("#copyReport").addEventListener("click", async () => { try { await navigator.clipboard.writeText(editor.value); showToast("Texto copiado."); } catch { editor.select(); document.execCommand("copy"); showToast("Texto copiado."); } });
  document.querySelector("#saveReport").addEventListener("click", saveReport);
}

function bindReports() {
  document.querySelector("#newReport")?.addEventListener("click", requestNewReport);
  main.querySelectorAll("[data-open-report]").forEach(button => button.addEventListener("click", () => {
    const report = state.reports.find(r => r.id === button.dataset.openReport);
    if (!report) return;
    state.currentId = report.id;
    state.draft = structuredClone(report);
    persist(); setRoute("review");
  }));
}

function bindLibrary() {
  main.querySelectorAll(".copy-phrase").forEach(button => button.addEventListener("click", async () => { await navigator.clipboard.writeText(button.dataset.phrase); showToast("Frase copiada para adapta\u00e7\u00e3o."); }));
}

function countSelections() {
  return Object.values(state.draft.selected).flat().filter(value => value !== "sem-registro").length;
}

function countEvidence() {
  return Object.values(state.draft.evidence).filter(Boolean).length;
}

function generateReportText() {
  if (!state.draft.childName) return "";
  const name = state.draft.childName;
  const content = Object.fromEntries(dimensions.map(dimension => [dimension.id, dimensionContent(dimension, name)]));
  if (!Object.values(content).some(item => item.sentences.length || item.evidence)) return "";

  const sourceText = state.draft.recordSources?.length
    ? `A s\u00edntese considerou registros reunidos em diferentes momentos do per\u00edodo, como ${humanList(state.draft.recordSources.map(source => source.toLowerCase()))}.`
    : "A s\u00edntese re\u00fane as situa\u00e7\u00f5es informadas pela professora ao longo do per\u00edodo acompanhado.";
  const opening = `Durante ${periodWithArticle(state.draft.period)}, na etapa ${state.draft.stage}, ${name} participou de experi\u00eancias organizadas em diferentes contextos, incluindo propostas coletivas, pequenos grupos, momentos de brincadeira e situa\u00e7\u00f5es da rotina. ${sourceText}`;

  const paragraphs = [opening];
  const participation = composeParagraph([content.participacao, content.interacoes], "Nas situa\u00e7\u00f5es de participa\u00e7\u00e3o e conviv\u00eancia", name);
  const languages = composeParagraph([content.linguagem, content.expressao], "Nas experi\u00eancias de linguagem, imagina\u00e7\u00e3o e express\u00e3o", name);
  const cognitive = composeParagraph([content.experiencias], "Nas situa\u00e7\u00f5es de investiga\u00e7\u00e3o e constru\u00e7\u00e3o de conhecimentos", name);
  const motor = composeParagraph([content.motor, content.autonomia], "Nas experi\u00eancias corporais e nas a\u00e7\u00f5es de cuidado e organiza\u00e7\u00e3o", name);
  const trajectory = composeParagraph([content.percurso], "No percurso registrado", name);
  [participation, languages, cognitive, motor, trajectory].filter(Boolean).forEach(paragraph => paragraphs.push(paragraph));

  paragraphs.push(`As observa\u00e7\u00f5es reunidas descrevem o percurso de ${name} no per\u00edodo sem estabelecer compara\u00e7\u00f5es com outras crian\u00e7as. Elas oferecem refer\u00eancias para a continuidade do trabalho pedag\u00f3gico, respeitando seus modos de participar, comunicar-se, explorar e aprender.`);
  if (state.draft.bnccRequired && state.draft.bnccCodes?.length) paragraphs.push(`Refer\u00eancias curriculares indicadas pela institui\u00e7\u00e3o: ${state.draft.bnccCodes.join(", ")}.`);
  return paragraphs.join("\n\n");
}

function dimensionContent(dimension, name) {
  const ids = (state.draft.selected[dimension.id] || []).filter(id => id !== "sem-registro");
  const sentences = ids.map(id => dimension.options.find(([optionId]) => optionId === id)?.[2]).filter(Boolean).map(text => personalizeSentence(text, name));
  const evidence = state.draft.evidence[dimension.id]?.trim() ? personalizeSentence(state.draft.evidence[dimension.id], name) : "";
  return { sentences, evidence };
}

function composeParagraph(items, lead, name) {
  const sentences = items.flatMap(item => item.sentences);
  const evidence = items.map(item => item.evidence).filter(Boolean);
  if (!sentences.length && !evidence.length) return "";
  const parts = [];
  if (sentences.length) parts.push(`${lead}, ${contextualLower(sentences[0], name)}`);
  sentences.slice(1).forEach((sentence, index) => parts.push(index % 2
    ? `Tamb\u00e9m se observou que ${contextualLower(sentence, name)}`
    : `Al\u00e9m disso, ${contextualLower(sentence, name)}`));
  evidence.forEach((example, index) => parts.push(`${index ? "Outro registro concreto mostra que" : "Como exemplo concreto,"} ${contextualLower(example, name)}`));
  if (!sentences.length && evidence.length) parts[0] = `${lead}, um registro concreto mostra que ${contextualLower(evidence[0], name)}`;
  return parts.map(normalizeSentence).join(" ").replace(new RegExp(`(^|[.!?]\\s+)${name.toLowerCase()}\\b`, "g"), match => match.replace(name.toLowerCase(), name));
}

function personalizeSentence(text, name) {
  const sentence = normalizeSentence(text);
  if (sentence.toLocaleLowerCase("pt-BR").startsWith(name.toLocaleLowerCase("pt-BR"))) return sentence;
  if (/^(Os registros|A media\u00e7\u00e3o|O apoio|As observa\u00e7\u00f5es)/i.test(sentence)) return sentence;
  const contextualOpening = sentence.match(/^(Nas?\s[^,]+|Em\s[^,]+|Com\s[^,]+|Ao longo\s[^,]+|Durante\s[^,]+|Nos registros\s[^,]+),\s*/i);
  if (contextualOpening) return `${contextualOpening[0]}${name} ${lowerFirst(sentence.slice(contextualOpening[0].length))}`;
  return `${name} ${lowerFirst(sentence)}`;
}

function humanList(items) {
  if (items.length < 2) return items[0] || "os registros dispon\u00edveis";
  if (items.length === 2) return `${items[0]} e ${items[1]}`;
  return `${items.slice(0, -1).join(", ")} e ${items.at(-1)}`;
}

function contextualLower(text, name) {
  return text.startsWith(name) ? text : lowerFirst(text);
}

function periodWithArticle(text = "") {
  const period = text.trim();
  if (!period) return "o per\u00edodo acompanhado";
  if (/^(o|a|os|as|este|esta|neste|nesta|entre|de|do|da)\b/i.test(period)) return lowerFirst(period);
  return `o ${lowerFirst(period)}`;
}

function normalizeSentence(text) {
  const trimmed = text.trim();
  return trimmed ? trimmed[0].toUpperCase() + trimmed.slice(1).replace(/[.!?]*$/, ".") : "";
}

function lowerFirst(text = "") { return text ? text[0].toLowerCase() + text.slice(1) : "per\u00edodo acompanhado"; }

function reviewChecks(text) {
  const risky = /\b(apto|inapto|pronto|n\u00e3o pronto|maduro|imatura?|pregui\u00e7oso|agressivo|normal|anormal)\b/i.test(text);
  const codesOk = !state.draft.bnccRequired || state.draft.bnccCodes.length > 0;
  const integralDomains = [
    (hasDimension("participacao") || hasDimension("interacoes")),
    hasDimension("linguagem"),
    hasDimension("experiencias"),
    (hasDimension("motor") || hasDimension("autonomia")),
    hasDimension("expressao"),
  ];
  const domainCount = integralDomains.filter(Boolean).length;
  return [
    { title: "Identifica\u00e7\u00e3o", detail: state.draft.childName && state.draft.stage ? "Nome e etapa informados." : "Confira nome e etapa.", ok: Boolean(state.draft.childName && state.draft.stage) },
    { title: "Per\u00edodo", detail: state.draft.period ? "Per\u00edodo delimitado." : "Informe o per\u00edodo acompanhado.", ok: Boolean(state.draft.period) },
    { title: "Evid\u00eancias", detail: countEvidence() ? `${countEvidence()} exemplos concretos informados.` : "Confira se o texto est\u00e1 sustentado nos registros.", ok: countEvidence() > 0 },
    { title: "Fontes do registro", detail: state.draft.recordSources.length ? `${state.draft.recordSources.length} tipos de registro consultados.` : "Consulte registros de diferentes momentos e linguagens.", ok: state.draft.recordSources.length > 0 },
    { title: "Desenvolvimento integral", detail: domainCount >= 4 ? `${domainCount} dimens\u00f5es do desenvolvimento aparecem no parecer.` : `H\u00e1 observa\u00e7\u00f5es em ${domainCount} dimens\u00f5es. Confira aspectos sociais, emocionais, motores, cognitivos e expressivos.`, ok: domainCount >= 4 },
    { title: "Apoios", detail: /apoio|media\u00e7\u00e3o|lembrete/i.test(text) ? "Os apoios aparecem no texto." : "Confira se algum apoio precisa ser citado.", ok: /apoio|media\u00e7\u00e3o|lembrete/i.test(text) },
    { title: "Linguagem n\u00e3o classificat\u00f3ria", detail: risky ? "Revise r\u00f3tulos de prontid\u00e3o, maturidade ou comportamento." : "Nenhum r\u00f3tulo classificat\u00f3rio comum foi localizado.", ok: !risky },
    { title: "Refer\u00eancias BNCC", detail: !state.draft.bnccRequired ? "A institui\u00e7\u00e3o n\u00e3o informou exig\u00eancia de c\u00f3digos." : codesOk ? `${state.draft.bnccCodes.length} ${state.draft.bnccCodes.length === 1 ? "objetivo selecionado" : "objetivos selecionados"} pela professora.` : "Selecione objetivos apenas se sustentados pelos registros.", ok: codesOk },
  ];
}

function hasDimension(id) {
  return (state.draft.selected[id] || []).some(value => value !== "sem-registro") || Boolean(state.draft.evidence[id]?.trim());
}

function saveReport() {
  const text = document.querySelector("#reportText").value.trim();
  if (!text) return showToast("O parecer est\u00e1 vazio.");
  const id = state.currentId || crypto.randomUUID();
  const report = { ...structuredClone(state.draft), id, text, updatedAt: new Date().toISOString() };
  const index = state.reports.findIndex(r => r.id === id);
  if (index >= 0) state.reports[index] = report; else state.reports.push(report);
  state.currentId = id; state.draft = structuredClone(report); persist();
  showToast("Parecer salvo neste navegador."); render();
}

function requestNewReport() {
  if (state.draft.childName || state.draft.text) dialog.showModal();
  else startNewReport();
}

function startNewReport() {
  state.currentId = null; state.draft = emptyDraft(); persist(); setRoute("context");
}

function formatDate(value) {
  if (!value) return "agora";
  return new Intl.DateTimeFormat("pt-BR", { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" }).format(new Date(value));
}

document.querySelector("#menuButton").addEventListener("click", () => document.body.classList.toggle("menu-open"));
document.querySelector("#newReportTop").addEventListener("click", requestNewReport);
dialog.addEventListener("close", () => { if (dialog.returnValue === "confirm") startNewReport(); });

render();
