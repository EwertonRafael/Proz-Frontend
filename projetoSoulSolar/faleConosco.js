
var nome = document.getElementById("nome").value;
var email = document.getElementById("email").value;

var mensagemNome = document.getElementById("mensagem-nome");
var mensagemEmail = document.getElementById("mensagem-email");

if (nome.length < 3) {
  mensagemNome.textContent = "Nome deve ter no mínimo 3 caracteres";
  mensagemNome.classList.add("mensagem-erro");
  
} else {
  mensagemNome.textContent = "";
  mensagemNome.classList.remove("mensagem-erro");
}

if (email.trim() === "") {
  mensagemEmail.textContent = "Email é obrigatório";
  mensagemEmail.classList.add("mensagem-erro")
}else if (!email.contains("@") && !email.endsWith(".com")) {
  mensagemEmail.textContent = "Email inválido";
  mensagemEmail.classList.add("mensagem-erro");
} else {
  mensagemEmail.textContent = "";
  mensagemEmail.classList.remove("mensagem-erro");
}
