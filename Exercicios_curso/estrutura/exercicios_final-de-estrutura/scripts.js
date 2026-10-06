//exercicio 1
let nome = "gabriel";
let number = 25;
let cnh = true;

console.log(typeof nome);
console.log(typeof number);
console.log(typeof cnh);

//exercicio 2

let maiorIdade = 18;

if (maiorIdade >= 18) {
  console.log("Entrada permitida");
}

//exercicio 3
const nome1 = "Gabriel";

if (nome1 === "Gabriel") {
  console.log("è ele ");
}

//exercicio 4
const num = 18;
console.log(Math.pow(2, 2));
console.log(Math.pow(3, 2));
console.log(Math.pow(num, 2));

//exercicio 5

let velo = 120;

if (velo <= 80) {
  console.log("Dentro do limite de velocidade");
} else {
  console.log("Acima da velocidade");
}

// exercicio 6
let idade = 18;
let cnhEx6 = true;

if (idade >= 18 && cnhEx6 === true) {
  console.log("Pode dirigir");
} else if (idade > 18 && cnhEx6 !== true) {
  console.log("Não tem cnh");
} else {
  console.log("Menor de idade");
}

// exercicio 7
let x = 0;
while (x <= 10) {
  console.log(`Em ${x}`);
  x++;
}
//exercicio 8

for (let i = 100; i >= 50; i--) {
  console.log(`${i}`);
}
//exercicio 9
for (let i = 0; i <= 50; i++) {
  if (i % 2 == 0) {
    console.log(`É Par`);
  } else {
    console.log(`É impar`);
  }
}
//exercicio 10
let divisoes = 0;
let numes = 41;

for (let i = 1; i <= numes; i++) {
  if (numes % i == 0) {
    divisoes++;
  }
}

if (divisoes == 2) {
  console.log(`o numero ${numes} é primo `);
} else {
  console.log(`o numero ${numes} não é primo`);
}
