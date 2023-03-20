var numeroSecreto = parseInt(Math.random() * 11);
var tentativas = 5;

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);

  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Acertou Miserável!!!";
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Você deve chutar um número de 0 a 10";
  }
  if (tentativas == 0) {
    elementoResultado.innerHTML =
      "Acabaram a suas tentativas. O Número secreto era " + numeroSecreto; 
      return;
  }
  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Acertou Miserável!!!";
  } else if (numeroSecreto < chute) {
    elementoResultado.innerHTML =
      "O número correto é menor. Você tem mais " + tentativas + " tentativa(s).";
  } else if (numeroSecreto > chute) {
    elementoResultado.innerHTML =
      "O número correto é maior. Você tem mais " + tentativas + " tentativa(s).";
  }
  tentativas--;
}
