function saudacao() {
  console.log("Hello word!");
}
saudacao();

function ida(idade) {
  console.log("Voce tem " + idade + " anos");
}
ida(25);

function soma(x, y) {
  return x + y;
}
console.log(soma(3, 2));

function ale() {
  console.log(Math.random());
}

ale();
ale();

function maiorIdade(idade) {
  if (idade >= 18) {
    console.log("Possui " + idade + " pode dirigir");
  } else {
    console.log("Possui " + idade + " não pode dirigir");
  }
}
maiorIdade(18);
maiorIdade(15);

function tipoDado(tipo) {
  if (tipo) console.log(typeof tipo);
}
tipoDado("olá");
tipoDado(5);
tipoDado(true);

function inversor(x) {
  x;
  console.log(Math.abs(x));
}
inversor(-5);

function texto(contar) {
  if (contar.length > 10) {
    console.log("Texto muito longo");
  } else {
    console.log("Texto dentro do limite");
  }
}
texto("olá");
texto("jhgbskgnskgnsngj");

function potencializador(x, y = 2) {
  return Math.pow(x, y);
}
console.log(potencializador(3, 2));

function pares(numero) {
  while (numero >= 0) {
    if (numero % 2 === 0) {
      console.log(numero);
    }
    numero--;
  }
}
pares(10);
