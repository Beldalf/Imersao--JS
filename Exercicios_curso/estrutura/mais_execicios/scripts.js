console.log("contar de 1 a 10");
for (let i = 0; i < 10; i = i + 1) {
  console.log(`Missisipi ${i + 1}`);
}
console.log("contar de 10 a 1");
for (let i = 10; i > 0; i = i - 1) {
  console.log(`Lançamento em ${i}`);
}
console.log("contar de 2 a 20");
for (let i = 0; i <= 20; i = i + 2) {
  console.log(`${i}`);
}
console.log("contar de 5 a 50");
for (let i = 0; i <= 50; i = i + 5) {
  console.log(`${i}`);
}
console.log("contar os numeros impares");
for (let i = 0; i <= 20; i = i + 1) {
  if (i % 2 === 1) console.log(`${i} è impar`);
}
console.log("somar de 1 a 10");
let soma1 = 0;
for (let i = 0; i <= 10; i = i + 1) {
  soma1 = soma1 + i;
  console.log(`A soma é ${soma1}`);
}
console.log("somar de 1 a 100");
let soma2 = 0;
for (let i = 0; i <= 100; i = i + 1) {
  soma2 = soma2 + i;
  console.log(`A soma é ${soma2}`);
}
console.log("somar de 2 a 100");
let soma3 = 0;
for (let i = 0; i > 100; i = i + 2) {
  soma3 = soma3 + i;
  console.log(`Asoma é ${soma3}`);
}
console.log("multiplos de 5 entre 1 a 100");
let quantidade = 0;
for (let i = 0; i < 100; i = i + 5) {
  if (i / 5 === 0);
  quantidade++;
  console.log(`existem ${quantidade} multiplos de 5`);
}
let soma4 = 0;
for (let i = 0; i < 5; i++) {
  let numero = Number(prompt("Valor:"));
  soma4 = soma4 + numero;
  console.log(`${numero}`);
}
console.log(`A soma é ${soma4}`);
