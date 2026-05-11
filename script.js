const video = document.getElementById("videoIntro");
const intro = document.getElementById("intro");
const convite = document.getElementById("convite");
const overlayInicio = document.getElementById("overlay-inicio");
const btnIniciar = document.getElementById("btnIniciar");


convite.style.display = "none";

// Quando clicar no botão de iniciar
btnIniciar.addEventListener("click", () => {
  // Esconde a tela do botão
  overlayInicio.style.display = "none";
  
  // Toca o vídeo com som
  video.muted = false;
  video.play().catch(error => {
      console.log("Erro ao dar play:", error);
  });
});

/* Terminou o vídeo */
video.addEventListener("ended", () => {
  intro.style.display = "none";
  convite.style.display = "block";
});

/* CAMPOS DINÂMICOS */

const quantidadeInput = document.getElementById("quantidade");
const camposDinamicos = document.getElementById("camposDinamicos");

quantidadeInput.addEventListener("input", () => {

  camposDinamicos.innerHTML = "";

  let quantidade = parseInt(quantidadeInput.value);

  if(isNaN(quantidade) || quantidade <= 0){
    return;
  }

  for(let i = 1; i <= quantidade; i++){

    camposDinamicos.innerHTML += `
    
      <div class="convidado-box">

        <h3>Convidado ${i}</h3>

        <input 
          type="text" 
          placeholder="Nome do convidado"
          class="nomeConvidado"
        >

        <input 
          type="number" 
          placeholder="Idade"
          class="idadeConvidado"
        >

      </div>

    `;

  }

});

/* BOTÃO */

const botao = document.getElementById("btnConfirmar");

botao.addEventListener("click", confirmar);

function confirmar() {

  let quantidade = quantidadeInput.value;

  if(quantidade === ""){
    alert("Informe a quantidade!");
    return;
  }

  let nomes = document.querySelectorAll(".nomeConvidado");
  let idades = document.querySelectorAll(".idadeConvidado");

  for(let i = 0; i < nomes.length; i++){

    if(nomes[i].value === "" || idades[i].value === ""){

      alert("Preencha todos os convidados!");
      return;

    }

  }


  alert("Presença confirmada com sucesso! 🎉");

}