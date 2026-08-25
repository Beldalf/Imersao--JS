console.log(
  "Isto é uma string\nIsto é uma outra string\nIsto é a outra string também",
); //String  /n funciona para pular a linha
console.log("Meu nome é 'Uel'");
console.log('Meu nome é "Aiel"'); //String
console.log(`A soma de 2 + 2 é ${2 + 2}`); //String  o ${} funciona para colocar variavel dentro de string
console.log(" Salada " + " de " + " frutas"); //String o- + é o contacatenar que basicamente é escrever e colocar + escrever denovo

//Execicios//
{
  console.log("_________________  Exercicios  _______________________");
  console.log("Eu estou fazendo o metodo do Gui"); //String normal com aspas duplas
  console.log("Eu estou com Frio"); //String normal com aspas simples
  console.log(`Eu estou tentando Aprender JS`); //String normal com crase

  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1); //string para permitir que o capitalize funcione

  console.log(capitalize("eu estou praticando o exercicio de JS")); //String + capitalize( para deixar a primeira letra maiuscula)

  const capitalizeAll = (str) =>
    str
      .split(" ")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" "); //string para permitir que o capitalizeAll funcione

  console.log(capitalizeAll("eu estou gigante tentando aprender JS")); //String + capitalezeALL( para deixar todas as primeiras letras maiusculas)

  console.log("Eu estou tentando tudo grande aprender JS".toUpperCase()); //String + toUpperCase( para deixar todas as letras maiusculas)

  console.log("Eu estou tentando aprender JS".toLowerCase()); //String + toLowerCase( para deixar todas as letras minusculas)

  console.log("Eu estou tentando aprender JS".length); //String + length( para contar a quantidade de caracteres da string)

  console.log("Eu estou tentando aprender JS".charAt(0)); //String + charAt( para pegar o caracter da posição que você quer)
  console.log("Eu estou tentando aprender JS".charAt(5)); //String + charAt( para pegar o caracter da posição que você quer)

  console.log("Eu estou tentando aprender JS".indexOf("tentando")); //String + indexOf( para pegar a posição do caracter que você quer)

  console.log("Eu estou tentando aprender JS".lastIndexOf("JS")); //String + lastIndexOf( para pegar a posição do caracter que você quer)

  console.log("Eu estou tentando aprender JS".includes("tentando")); //String + includes( para verificar se a palavra existe na string, retorna true ou false)

  console.log("Eu estou tentando aprender JS".startsWith("Eu")); //String + startsWith( para verificar se a palavra começa com a palavra que você quer, retorna true ou false)

  console.log("Eu estou tentando aprender JS".endsWith("JS")); //String + endsWith( para verificar se a palavra termina com a palavra que você quer, retorna true ou false)

  console.log("Eu estou tentando aprender JS".slice(0, 2)); //String + slice( para pegar a palavra da posição que você quer, no caso ele vai pegar da posição 0 até a posição 2, mas não vai pegar a posição 2)

  console.log("Eu estou tentando aprender JS".substring(0, 2)); //String + substring( para pegar a palavra da posição que você quer, no caso ele vai pegar da posição 0 até a posição 2, mas não vai pegar a posição 2)
}
//Execicios CHATGPT//
console.log("____________  Exercicios_Chatgpt  ___________________");

{
  let nome = "Gabriel"; //String + let ( para declarar uma variavel) string
  let idade = 25; //String + let ( para declarar uma variavel) number
  let frase = "Javascript é legal"; // string + let tambem funciona com frases grande como variavel

  console.log(`Meu nome é ${nome} e tenho ${idade} anos.`); //String + ${} ( para colocar uma variavel dentro da string) que pode ser string ou number ate os dois

  console.log(`${frase}`); //String + ${} ( para colocar uma variavel dentro da string)

  console.log(`${nome}`.toUpperCase()); //String + ${} ( para colocar uma variavel dentro da string) + toUpperCase() ( para deixar todas as letras maiusculas)

  console.log(`${nome}`.toLowerCase()); //String + ${} ( para colocar uma variavel dentro da string) + toLowerCase() ( para deixar todas as letras minusculas)

  console.log("gabriel".charAt(0)); //String + charAt( para pegar o caracter da posição que você quer)

  console.log("gabriel".charAt(6)); //String + charAt( para pegar o caracter da posição que você quer)
}
{
  let nome = "Gabriel";
  let idade = 25;

  console.log(`Meu nome é ${nome} e tenho ${idade} anos.`); //String + ${} ( para colocar uma variavel dentro da string) que pode ser string ou number ate os dois

  let frase = "eu estou estudando Javascript"; //String + let ( para declarar uma variavel) string

  console.log(`eu estou estudando Javascript`.includes("Javascript")); //String + includes( para verificar se a palavra existe na string, retorna true ou false)

  console.log(`eu estou estudando Javascript`.startsWith("cu")); //String + startsWith( para verificar se a palavra começa com a palavra que você quer, retorna true ou false)

  console.log(`Eu gosto de Python`.replace("Python", "Javascript")); //String + replace( para substituir uma palavra por outra)

  console.log("  Eu gosto de Python  ".trim()); //String + trim( para remover espaços em branco no início e no final da string)

  console.log("JavaScript".slice(0, 4)); //String + slice( para pegar a palavra da posição que você quer)

  console.log(
    "Meu nome é " +
      prompt("Digite seu nome:") +
      " e possuo " +
      prompt("Digite sua idade:") +
      " anos.",
  ); //String + prompt( para abrir uma janela para o usuario digitar algo)
}
