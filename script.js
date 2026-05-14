const conviteTab = document.getElementById('convite-tab');
const adminTab = document.getElementById('admin-tab');

const conviteContent = document.getElementById('convite-content');
const adminContent = document.getElementById('admin-content');

const stepOne = document.getElementById('step-one');

const formSim = document.getElementById('rsvp-form-sim');
const formNao = document.getElementById('rsvp-form-nao');

const successMsg = document.getElementById('success-msg');

const successText = document.getElementById('success-text');
const successSubtitle = document.getElementById('success-subtitle');

/* =========================
   ABAS
========================= */

conviteTab.addEventListener('click', () => {

  conviteContent.classList.remove('hidden');
  adminContent.classList.add('hidden');

  conviteTab.classList.add('tab-active');
  conviteTab.classList.remove('tab-default');

  adminTab.classList.add('tab-default');
  adminTab.classList.remove('tab-active');
});

adminTab.addEventListener('click', () => {

  adminContent.classList.remove('hidden');
  conviteContent.classList.add('hidden');

  adminTab.classList.add('tab-active');
  adminTab.classList.remove('tab-default');

  conviteTab.classList.add('tab-default');
  conviteTab.classList.remove('tab-active');
});

/* =========================
   BOTÃO SIM
========================= */

document.getElementById('btn-sim')
.addEventListener('click', () => {

  stepOne.classList.add('hidden');

  formSim.classList.remove('hidden');

  formNao.classList.add('hidden');

  successMsg.classList.add('hidden');
});

/* =========================
   BOTÃO NÃO
========================= */

document.getElementById('btn-nao')
.addEventListener('click', () => {

  stepOne.classList.add('hidden');

  formNao.classList.remove('hidden');

  formSim.classList.add('hidden');

  successMsg.classList.add('hidden');
});

/* =========================
   VOLTAR SIM
========================= */

document.getElementById('back-btn-sim')
.addEventListener('click', () => {

  formSim.classList.add('hidden');

  stepOne.classList.remove('hidden');

  formSim.reset();
});

/* =========================
   VOLTAR NÃO
========================= */

document.getElementById('back-btn-nao')
.addEventListener('click', () => {

  formNao.classList.add('hidden');

  stepOne.classList.remove('hidden');

  formNao.reset();
});

/* =========================
   ENVIAR SIM
========================= */

formSim.addEventListener('submit', (e) => {

  e.preventDefault();

  formSim.classList.add('hidden');

  successMsg.classList.remove('hidden');

  successText.textContent =
    '✅ Presença confirmada!';

  successSubtitle.textContent =
    'A Wendy está te esperando 💜';
});

/* =========================
   ENVIAR NÃO
========================= */

formNao.addEventListener('submit', (e) => {

  e.preventDefault();

  formNao.classList.add('hidden');

  successMsg.classList.remove('hidden');

  successText.textContent =
    '😢 Que pena que você não vai';

  successSubtitle.textContent =
    'A Wendy vai sentir sua falta 💜';
});

/* =========================
   ÍCONES
========================= */

if (window.lucide) {
  lucide.createIcons();
}