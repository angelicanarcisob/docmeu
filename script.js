/* =========================
   CONFIGURAÇÃO
========================= */

const defaultConfig = {
  party_title: "Aniversário da Wendy",
  party_date: "Sábado, 16 de Agosto",
  party_time: "15h às 19h",
  party_location: "Rua Goiás 2680"
};

let allGuests = [];

/* =========================
   ELEMENTOS
========================= */

const conviteTab =
  document.getElementById('convite-tab');

const adminTab =
  document.getElementById('admin-tab');

const conviteContent =
  document.getElementById('convite-content');

const adminContent =
  document.getElementById('admin-content');

const stepOne =
  document.getElementById('step-one');

const formSim =
  document.getElementById('rsvp-form-sim');

const formNao =
  document.getElementById('rsvp-form-nao');

const successMsg =
  document.getElementById('success-msg');

/* =========================
   CONFIGURA TÍTULOS
========================= */

document.getElementById('title').textContent =
  defaultConfig.party_title;

document.getElementById('date-text').textContent =
  defaultConfig.party_date;

document.getElementById('time-text').textContent =
  defaultConfig.party_time;

document.getElementById('location-text').textContent =
  defaultConfig.party_location;

/* =========================
   BOTÃO SIM
========================= */

document
  .getElementById('btn-sim')
  .addEventListener('click', () => {

    stepOne.classList.add('hidden');

    formSim.classList.remove('hidden');

    formNao.classList.add('hidden');
  });

/* =========================
   BOTÃO NÃO
========================= */

document
  .getElementById('btn-nao')
  .addEventListener('click', () => {

    stepOne.classList.add('hidden');

    formNao.classList.remove('hidden');

    formSim.classList.add('hidden');
  });

/* =========================
   VOLTAR SIM
========================= */

document
  .getElementById('back-btn-sim')
  .addEventListener('click', () => {

    formSim.classList.add('hidden');

    stepOne.classList.remove('hidden');

    formSim.reset();
  });

/* =========================
   ABAS
========================= */

conviteTab.addEventListener('click', () => {

  conviteContent.classList.remove('hidden');

  adminContent.classList.add('hidden');

  conviteTab.classList.remove('tab-default');
  conviteTab.classList.add('tab-active');

  adminTab.classList.remove('tab-active');
  adminTab.classList.add('tab-default');
});

adminTab.addEventListener('click', () => {

  adminContent.classList.remove('hidden');

  conviteContent.classList.add('hidden');

  adminTab.classList.remove('tab-default');
  adminTab.classList.add('tab-active');

  conviteTab.classList.remove('tab-active');
  conviteTab.classList.add('tab-default');
});

/* =========================
   FORMULÁRIO SIM
========================= */

formSim.addEventListener('submit', (e) => {

  e.preventDefault();

  formSim.classList.add('hidden');

  successMsg.classList.remove('hidden');
});

/* =========================
   ÍCONES
========================= */

if (window.lucide) {
  lucide.createIcons();
}
/* =========================
   VOLTAR NÃO
========================= */

document
  .getElementById('back-btn-nao')
  .addEventListener('click', () => {

    formNao.classList.add('hidden');

    stepOne.classList.remove('hidden');

    formNao.reset();
  });

/* =========================
   FORM NÃO
========================= */

formNao.addEventListener('submit', (e) => {

  e.preventDefault();

  formNao.classList.add('hidden');

  successMsg.classList.remove('hidden');

  document.getElementById('success-text').textContent =
    '😢 Que pena que você não vai.';

  document.getElementById('success-subtitle').textContent =
    'A Wendy vai sentir sua falta 💜';
});