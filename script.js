const ADMIN_PASSWORD = "1234";

let isAdminLoggedIn = false;
let allGuests = [];

const defaultConfig = {
  party_title: "Aniversário da Wendy",
  party_date: "16 de Agosto",
  party_time: "15h às 19h",
  party_location: "Rua Goiás 2680",
};

// ELEMENT SDK
window.elementSdk.init({
  defaultConfig,

  onConfigChange: async (config) => {
    document.getElementById("title").textContent =
      config.party_title || defaultConfig.party_title;

    document.getElementById("date-text").textContent =
      config.party_date || defaultConfig.party_date;

    document.getElementById("time-text").textContent =
      config.party_time || defaultConfig.party_time;

    document.getElementById("location-text").textContent =
      config.party_location || defaultConfig.party_location;
  },

  mapToCapabilities: () => ({
    recolorables: [],
    borderables: [],
    fontEditable: undefined,
    fontSizeable: undefined,
  }),

  mapToEditPanelValues: (config) =>
    new Map([
      ["party_title", config.party_title || defaultConfig.party_title],
      ["party_date", config.party_date || defaultConfig.party_date],
      ["party_time", config.party_time || defaultConfig.party_time],
      ["party_location", config.party_location || defaultConfig.party_location],
    ]),
});

// DATA SDK
const dataHandler = {
  onDataChanged(data) {
    allGuests = data;
    updateAdminStats(data);
  },
};

(async () => {
  const result = await window.dataSdk.init(dataHandler);

  if (!result.isOk) {
    console.error("Data SDK error:", result.error);
  }
})();

// ELEMENTOS
const stepOne = document.getElementById("step-one");
const formSim = document.getElementById("rsvp-form-sim");
const formNao = document.getElementById("rsvp-form-nao");
const successMsg = document.getElementById("success-msg");

// BOTÃO SIM
document.getElementById("btn-sim").addEventListener("click", () => {
  stepOne.classList.add("hidden");
  formSim.classList.remove("hidden");
});

// BOTÃO NÃO
document.getElementById("btn-nao").addEventListener("click", () => {
  stepOne.classList.add("hidden");
  formNao.classList.remove("hidden");
});

// VOLTAR SIM
document.getElementById("back-btn-sim").addEventListener("click", () => {
  stepOne.classList.remove("hidden");
  formSim.classList.add("hidden");
  formSim.reset();
});

// VOLTAR NÃO
document.getElementById("back-btn-nao").addEventListener("click", () => {
  stepOne.classList.remove("hidden");
  formNao.classList.add("hidden");
  formNao.reset();
});

// FORM SIM
formSim.addEventListener("submit", async (e) => {
  e.preventDefault();

  const btn = document.getElementById("submit-btn-sim");

  btn.disabled = true;
  btn.textContent = "⏳ Enviando...";

  const result = await window.dataSdk.create({
    nome: document.getElementById("nome-sim").value || "",
    adultos: parseInt(document.getElementById("adultos").value) || 0,
    criancas: parseInt(document.getElementById("criancas").value) || 0,
    confirmou_aviso: "sim",
    mensagem: document.getElementById("mensagem-sim").value || "",
    created_at: new Date().toISOString(),
  });

  if (result.isOk) {
    formSim.classList.add("hidden");
    successMsg.classList.remove("hidden");

    document.getElementById("success-text").textContent =
      "✅ Presença confirmada!";
  }
});

// FORM NÃO
formNao.addEventListener("submit", async (e) => {
  e.preventDefault();

  const btn = document.getElementById("submit-btn-nao");

  btn.disabled = true;
  btn.textContent = "⏳ Enviando...";

  const result = await window.dataSdk.create({
    nome: document.getElementById("nome-nao").value || "",
    adultos: 0,
    criancas: 0,
    confirmou_aviso: "nao",
    mensagem: document.getElementById("mensagem-nao").value || "",
    created_at: new Date().toISOString(),
  });

  if (result.isOk) {
    formNao.classList.add("hidden");
    successMsg.classList.remove("hidden");

    document.getElementById("success-text").textContent =
      "😢 Que pena que você não vai poder ir.";
  }
});

// NOVO RSVP
document.getElementById("new-rsvp").addEventListener("click", () => {
  stepOne.classList.remove("hidden");

  formSim.classList.add("hidden");
  formNao.classList.add("hidden");
  successMsg.classList.add("hidden");

  formSim.reset();
  formNao.reset();
});

// TABS
document.getElementById("convite-tab").addEventListener("click", () => {
  document.getElementById("convite-content").classList.remove("hidden");
  document.getElementById("admin-content").classList.add("hidden");
});

document.getElementById("admin-tab").addEventListener("click", () => {
  document.getElementById("convite-content").classList.add("hidden");
  document.getElementById("admin-content").classList.remove("hidden");
});

// ADMIN LOGIN
document
  .getElementById("admin-login-btn")
  .addEventListener("click", () => {
    if (
      document.getElementById("admin-password").value === ADMIN_PASSWORD
    ) {
      isAdminLoggedIn = true;

      document.getElementById("admin-login").classList.add("hidden");
      document.getElementById("admin-dashboard").classList.remove("hidden");
    }
  });

// STATS
function updateAdminStats(data) {
  const confirmados = data.filter((g) => g.confirmou_aviso === "sim");

  const totalAdultos = confirmados.reduce(
    (sum, g) => sum + (g.adultos || 0),
    0
  );

  const totalCriancas = confirmados.reduce(
    (sum, g) => sum + (g.criancas || 0),
    0
  );

  document.getElementById("total-confirmados").textContent =
    confirmados.length;

  document.getElementById("total-adultos").textContent =
    totalAdultos;

  document.getElementById("total-criancas").textContent =
    totalCriancas;
}

lucide.createIcons();