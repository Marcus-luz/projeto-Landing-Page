var setaDireita = document.getElementById("seta_direita");
var Leonardo = document.getElementById("leonardo");
var Bruna = document.getElementById("bruna");
var Samantha = document.getElementById("samantha"); 
var setaEsquerda = document.getElementById("seta_esquerda");

function RolarparaDireita() {
  Leonardo.style.display = "none";
  Bruna.style.display = "flex";

  setaDireita.style.display = "none"; 
  setaEsquerda.style.display = "flex";
  setaEsquerda.style.marginTop = "55px";
}

function RolarparaEsquerda() {
  Leonardo.style.display = "flex";
  Bruna.style.display = "none";

  setaDireita.style.display = "flex";
  setaDireita.style.marginTop = "55px";
  setaEsquerda.style.display = "none";
}
