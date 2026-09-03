let idade = 40;
if (idade > 18) {
  console.log("pode dirigir"); //O if é uma estrutura de controle de fluxo que permite executar um bloco de código se uma condição for verdadeira. Ele é usado para tomar decisões com base em condições específicas.
}

if (idade > 30) {
  console.log("Vc já é veio jovem ");
}

let nome = "Gabriel";

if (nome == "Gabriel" && idade > 18) {
  console.log(`${nome} é o cara`);
}

let passaport = true;

if ((nome == "Gabriel" && idade > 80) || passaport == true) {
  console.log(`so faltou idade`);
}

//Execicios//
console.log("_______EXERCICIOS________");
if (idade > 18);
{
  console.log("POde entrar na balada");
}

const meuNome = "Gabriel";

if (meuNome == "Gabriel");
{
  console.log("Bem vindo de volta");
}

//Execicios CHATGPT//
// teste com if e else
console.log("_______EXERCICIOSGPT________");
{
  let idadegpt = prompt("Digite sua Idade");

  if (idadegpt > 18) {
    console.log("é maior de idade");
  } else {
    console.log("Não é maior de idade");
  }

  let score = prompt("Digite o valo");
  if (score > 0) {
    console.log("Numero positivo");
  } else {
    console.log("Numero Negativo");
  }

  let imPar = prompt("Digite um numero");
  if (imPar % 2 === 0) {
    console.log("É Par");
  } else {
    console.log("É Impar");
  }

  if (idadegpt > 18) {
    console.log("Pode dirigir");
  } else {
    console.log("Não pode dirigir");
  }

  let senha = prompt("Digite sua senha");
  let senhaSalva = 1234;
  if (senha == senhaSalva) {
    console.log("Senha correta");
  } else {
    console.log("Senha incorreta");
  }

  // teste com else if

  let nota = prompt("Insira a nota do Aluno");
  if (nota > 7) {
    console.log("Aprovado");
  } else if (nota > 5 && nota < 6.9) {
    console.log("Recuperação");
  } else {
    console.log("Reprovado");
  }

  let temperatura = prompt("Digite a temperatura");
  if (temperatura > 30) {
    console.log("Esta quente");
  } else if (temperatura > 20 && temperatura < 30) {
    console.log("Temperatura Agradavel");
  } else {
    console.log("Esta frio");
  }

  let aposta1 = prompt("Digite o primeiro valor"),
    aposta2 = prompt("Digite o segundo valor"),
    aposta3 = prompt("Digite o valor");

  if (aposta1 > aposta2) {
    console.log("O primeiro valor é Maior");
  } else if (aposta1 == aposta2) {
    console.log("Eles são iguais");
  } else {
    console.log("O segundo valor é maior");
  }

  let venda = prompt("Insira o valor da compra");
  if (venda >= 100) {
    console.log("Ganhou 10% de desconto");
  } else {
    console.log("Sem desconto");
  }

  let userCorreto = "admin";
  let senhaCorreta = "1234";

  if (userCorreto == "admin" && senhaCorreta == "1234") {
    console.log("Bem vindo");
  } else {
    console.log("Usuario ou senha incorreta");
  }

  if (aposta1 > aposta2 > aposta3) {
    console.log("O primeiro valor é Maior");
  } else if (aposta1 < aposta3) {
    console.log("O terceiro é Maior");
  } else {
    console.log("O segundo valor é maior");
  }
}
