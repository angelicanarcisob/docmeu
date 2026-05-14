const ADMIN_PASSWORD = atob('d2VuZHlhZA==');

let allGuests = [];

window.elementSdk.init({
  defaultConfig,

  onConfigChange: async (config) => {

    document.getElementById('title').textContent =
      config.party_title;

    document.getElementById('date-text').textContent =
      config.party_date;

    document.getElementById('time-text').textContent =
      config.party_time;

    document.getElementById('location-text').textContent =
      config.party_location;
  }
});

const dataHandler = {
  onDataChanged(data) {
    allGuests = data;
  }
};

(async () => {

  const result = await window.dataSdk.init(dataHandler);

  if (!result.isOk) {
    console.error(result.error);
  }

})();

const stepOne = document.getElementById('step-one');

const formSim =
  document.getElementById('rsvp-form-sim');

const successMsg =
  document.getElementById('success-msg');

document
  .getElementById('btn-sim')
  .addEventListener('click', () => {

    stepOne.classList.add('hidden');

    formSim.classList.remove('hidden');
  });

document
  .getElementById('back-btn-sim')
  .addEventListener('click', () => {

    formSim.classList.add('hidden');

    stepOne.classList.remove('hidden');

    formSim.reset();
  });

formSim.addEventListener('submit', async (e) => {

  e.preventDefault();

  const btn =
    document.getElementById('submit-btn-sim');

  btn.disabled = true;

  btn.innerText = '⏳ Enviando...';

  const result = await window.dataSdk.create({

    nome:
      document.getElementById('nome-sim').value,

    celular:
      document.getElementById('celular-sim').value,

    adultos:
      parseInt(
        document.getElementById('adultos').value
      ) || 0,

    criancas:
      parseInt(
        document.getElementById('criancas').value
      ) || 0,

    nomes_criancas:
      document.getElementById('nomes-criancas').value,

    idade_criancas:
      document.getElementById('idade-criancas').value,

    mensagem:
      document.getElementById('mensagem-sim').value,

    confirmou_aviso: 'sim',

    created_at: new Date().toISOString()
  });

  if (result.isOk) {

    formSim.classList.add('hidden');

    successMsg.classList.remove('hidden');

  } else {

    alert('Erro ao enviar!');
  }

  btn.disabled = false;

  btn.innerText = '🎉 Confirmar Presença';
});

lucide.createIcons();