const stepOne = document.getElementById('step-one');
const formSim = document.getElementById('rsvp-form-sim');
const successMsg = document.getElementById('success-msg');

// Abrir formulário

document
  .getElementById('btn-sim')
  .addEventListener('click', () => {

    stepOne.classList.add('hidden');
    formSim.classList.remove('hidden');
  });

// Voltar

document
  .getElementById('back-btn-sim')
  .addEventListener('click', () => {

    formSim.classList.add('hidden');
    stepOne.classList.remove('hidden');
    formSim.reset();
  });

// Enviar formulário

formSim.addEventListener('submit', async (e) => {

  e.preventDefault();

  formSim.classList.add('hidden');
  successMsg.classList.remove('hidden');
});