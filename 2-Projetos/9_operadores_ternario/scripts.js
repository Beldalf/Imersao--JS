console.log(5 > 2 ? "é sim" : "é não");
console.log(10 < 2 ? "é sim" : "é não");
console.log(false ? 5 : 4);
console.log("gabriel" == "Gabriel" ? "olá gabriel" : "não é o gabriel");

//EXPLICAÇÂO DOS OPERADORES TERNARIOS São OPERADORES CONDICIONAIS, OU SEJA, ELE VAI TESTAR UMA CONDIÇÃO E RETORNAR UM VALOR PARA CADA CASO, SE FOR VERDADEIRO OU FALSO.

//Execicios CHATGPT//
console.log("____________  Exercicios_Chatgpt  ___________________");

let idade = 18;
let resultado = idade >= 18 ? "maior de idade" : "menor de idade";
console.log(resultado); // maior de idade

let numero = 26;
let saldo = numero >= 0 ? "numero positivo" : "numero negativo";
console.log(saldo);

let jogo = numero % 2 === 0 ? "é par" : "é impar";
console.log(jogo);

let prova = prompt("Digite a nota");
let nota = prova >= 6 ? "Aprovado" : "Reprovado";
console.log(nota);

let club = idade >= 18 ? "Pode entrar" : "Não pode entrar";
console.log(club);

let numero1 = 10;
let numero2 = 20;
let compara = numero1 > numero2 ? numero1 : numero2;
console.log("O maior numero é  " + compara);

let valor_de_compra = prompt("Digite o valor das compras");
let compra = valor_de_compra >= 100 ? "Você ganhou desconto" : "Sem desconto";
console.log(compra);

let userlogin = true;
let logado = userlogin ? "Seja bem vindo" : "Tente novamente";
console.log(logado);

let temcarteira = true;
let piloto = idade >= 18 && temcarteira ? "Pode dirigir" : "Não dirige";
console.log(piloto);
