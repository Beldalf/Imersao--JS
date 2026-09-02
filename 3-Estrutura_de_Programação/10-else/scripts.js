let velocidade = 100;
if (velocidade > 80) {
  console.log("Não foi multado");
} else {
  console.log("Foi multado"); //O else é uma estrutura de controle de fluxo que permite executar um bloco de código alternativo quando a condição do if não é atendida. Ele é usado para lidar com casos em que a condição do if é falsa.
}

// EXERCICIOS //

let correndo = 220;

if (correndo > 80) {
  console.log("Esta correndo");
} else {
  console.log("Não esta Correndo ");
}

// meu erros bobos
// let idade1 = prompt("Digite sua idade");
// let temCarta = prompt("Responda com sim ou não ");

// if ((temCarta == true) == "sim" || (temCarta == false) == "não");
// if (idade1 > 18 && temCarta == true) {
//   console.log("Pode dirigir, falta nada ");
// } else if (idade1 > 18 == true && temCarta == false) {
//   console.log("Falta tirar a carta");
// } else {
//   console.log("Não pode dirigir");
// }

let idade1 = prompt("Digite sua idade");
let temCarta = prompt("Responda com sim ou não");

if (idade1 > 18 && temCarta == "sim") {
  console.log("Pode dirigir, falta nada");
} else if (idade1 > 18 && temCarta == "não") {
  console.log("Falta tirar a carta");
} else {
  console.log("Não pode dirigir");
}
