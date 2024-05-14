var nome = document.getElementById("nome");
var mensagemNome = document.getElementById("mensagem-nome");
nome.addEventListener('input', () => {
  console.log(nome.value); 
  if (nome.value.length < 3) {
    mensagemNome.textContent = "Nome deve ter no mínimo 3 caracteres";
    mensagemNome.classList.add("mensagem-erro");
    nome.style.borderColor = "red";
  } else {
    nome.style.border = "";
    mensagemNome.textContent = "";
    mensagemNome.classList.remove("mensagem-erro");
  }
});

var email = document.getElementById("email");
var mensagemEmail = document.getElementById("mensagem-email");

email.addEventListener ('input', () =>{
  if (email.value.trim() === "") {
    mensagemEmail.textContent = "Email é obrigatório";
    mensagemEmail.classList.add("mensagem-erro")
    email.style.borderColor = "red";
  }else if (!email.value.includes("@") || !email.value.endsWith(".com")) {
    mensagemEmail.textContent = "Email inválido";
    mensagemEmail.classList.add("mensagem-erro");
    email.style.borderColor = "red";
  } else {
    email.style.borderColor = "";
    mensagemEmail.textContent = "";
    mensagemEmail.classList.remove("mensagem-erro");
  }
})

var endereco = document.getElementById("endereco");
var mensagemEndereco = document.getElementById("mensagem-endereco");
endereco.addEventListener('blur', ()=>{
  if(endereco.value.trim() === ""){
    mensagemEndereco.innerText = "Campo vazio, digite um endereço"
    mensagemEndereco.classList.add("mensagem-erro")
  }else{
    mensagemEndereco.classList.remove("mensagem-erro")
    mensagemEndereco.innerText =""
  }
})

var cidade = document.getElementById("cidade");
var mensagemCidade = document.getElementById("mensagem-cidade");
cidade.addEventListener('blur', ()=>{
  if(cidade.value.trim() === ""){
    mensagemCidade.innerText = "Campo vazio, digite uma cidade"
    mensagemCidade.classList.add("mensagem-erro")
  }else{
    mensagemCidade.classList.remove("mensagem-erro")
    mensagemCidade.innerText =""
  }
})