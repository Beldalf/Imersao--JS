function saudacao() {
  console.log("Olá, Gabriel!");
}
saudacao();

function mostrarMensagem() {
  console.log("Bem vindo !");
}
mostrarMensagem();
mostrarMensagem();
mostrarMensagem();

function mostrarNome(nome) {
  console.log("Olá, " + nome + " !");
}
mostrarNome("Gabriel");
mostrarNome("Gui");
mostrarNome("Luna");

function dobro(x) {
  console.log(x * 2);
}
dobro(5);
dobro(10);
dobro(25);

function triplo(x) {
  console.log(x * 3);
}
triplo(12);

//funçoes com return

function soma(x, y) {
  return x + y;
}
let resultado = soma(20, 44);
console.log("O resultado é " + resultado);

function subtrair(x, y) {
  return x - y;
}
console.log(subtrair(30, 14));

function multiplicar(x, y) {
  return x * y;
}
console.log(multiplicar(4, 71));

function divicao(x, y) {
  return x / y;
}
console.log(divicao(10, 2));
console.log(divicao(20, 5));
console.log(divicao(100, 4));

function calcularMedia(x, y, z) {
  return x + y + z / 3;
}
let resultado1 = calcularMedia(7, 8, 9);
console.log(resultado1);

function verificarIdade(idade) {
  if (idade > 18) {
    console.log("Maior de idade");
  } else {
    console.log("Menor de idade");
  }
}
console.log(verificarIdade(19));

function posiNega(num) {
  if (num == 0) {
    console.log("neutro");
  } else if (num > 0) {
    console.log("numero positivo");
  } else {
    console.log("numero negativo");
  }
}

posiNega(10);
posiNega(-4);
posiNega(0);

function verificarParOuImpar(num) {
  if (num % 2 == 0) {
    console.log("O numero é par");
  } else {
    console.log("o numero é Impar");
  }
}
verificarParOuImpar(20);
verificarParOuImpar(25);

function nota(num) {
  if (num >= 7) {
    console.log("Aprovado");
  } else {
    console.log("Reprovado");
  }
}

nota(6);
nota(8);

function bigNum(x, y) {
  if (x > y) {
    console.log(x + " é Maior");
  } else {
    console.log(y + " é Maior");
  }
}

bigNum(10, 20);

function compra(num) {
  if (num >= 100) {
    num * 0.9;
    console.log("Recebeu o desconto de 10%");
  } else {
    console.log("sem desconto");
  }
}
compra(190);

function temp(x) {
  if (x < 15) {
    console.log("Frio");
  } else if (x < 25) {
    console.log("Agradavel");
  } else {
    console.log("Quente");
  }
}
temp(14);
temp(23);
temp(31);

function bigTres(x, y, z) {
  if (x > y && x > z) {
    console.log(x + " é o maior");
  } else if (y > x && y > z) {
    console.log(y + " é maior");
  } else if (z > x && z > y) {
    console.log(z + " é maior");
  }
}

bigTres(10, 25, 8);

function tempConver(celsius) {
  return (celsius * 9) / 5 + 32;
}
console.log("está " + tempConver(25) + " fahrenheint");

function calculadora(x, y, operacao) {
  if (operacao === "+") {
    return x + y;
  }

  if (operacao === "-") {
    return x - y;
  }

  if (operacao === "*") {
    return x * y;
  }

  if (operacao === "/") {
    return x / y;
  }
}

console.log(calculadora(10, 20, "+"));
console.log(calculadora(10, 20, "-"));
console.log(calculadora(10, 20, "*"));
console.log(calculadora(10, 20, "/"));

function imc(peso, altura) {
  let resultado = peso / (altura * altura);
  if (resultado < 18.5) {
    return `IMC: ${resultado.toFixed(2)} - Abaixo do peso`;
  } else if (resultado < 25) {
    return `IMC: ${resultado.toFixed(2)} - Peso normal`;
  } else if (resultado < 30) {
    return `IMC: ${resultado.toFixed(2)} - Sobrepeso`;
  } else {
    return `IMC: ${resultado.toFixed(2)} - Obesidade`;
  }
}
console.log(imc(79, 1.7));
