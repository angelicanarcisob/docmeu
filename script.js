const botao = document.getElementById("btnConfirmar");

botao.addEventListener("click", confirmar);

function confirmar() {

  let nome = document.getElementById("nome").value;
  let pessoas = document.getElementById("pessoas").value;

  if (nome === "" || pessoas === "") {
    alert("Preencha todos os campos!");
    return;
  }

  document.getElementById("mensagem").style.display = "block";

  console.log("Convidado:", nome);
  console.log("Quantidade:", pessoas);
}