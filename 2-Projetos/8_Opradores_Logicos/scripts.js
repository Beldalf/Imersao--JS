console.log(5 > 3 && 3 == 2); // false
console.log(5 > 3 || 3 == 1); // true

console.log(3 == 3 && "Gabriel" == "Gabriel"); // true
console.log("felipe" == "João" || false); // false

console.log(!!(true && true)); // true

console.log(true && true); // true
console.log(false || false); // false

//explicação do operador lógico && (AND) , || (OR) e ! (NOT) //

// O operador lógico && (AND) retorna true se ambos os operandos forem verdadeiros, caso contrário, retorna false.

// exemplo : 5 > 3 && 3 < 6 é true, pois ambos os operandos são verdadeiros e esse é o unico que da true todos os outros exemplos retornam false.

//                                                             true && true = true
//                                                             true && false = false
//                                                             false && true = false
//                                                             false && false = false

// O operador lógico || (OR) retorna true se pelo menos um dos operandos for verdadeiro, caso contrário, retorna false.

// exemplo : 5 > 3 || 3 < 6 é true, pois equnto um dos operandos é verdadeiro, o resultado é true.

//                                                             true || true = true
//                                                             true || false = true
//                                                             false || true = true
//                                                             false || false = false
//  esse é o unico que da false todos os outros exemplos retornam true.

// O operador lógico ! (NOT) inverte o valor lógico de um operando. Se o operando for verdadeiro, retorna false; se for falso, retorna true.

// exemplo : !(5 > 3) é false, pois o operando 5 > 3 é verdadeiro, e o operador ! inverte o valor para falso.

//                                                             !true = false
//                                                             !false = true

// Exercicios//
console.log("_____EXERCICIOS_____");

console.log("guilherme" == "guilherme" && true); // true
console.log("Gabriel" == "Guilherme" && false); // false
console.log(10 < 20 || 20 > 10); // true
console.log(20 < 10 || 10 > 20); // false
console.log(10 > 20 || 20 > 10); // true
console.log(!(64 > 58 && 91 > 20)); // false
console.log(!(28 < 27 && 1 > 12)); // true

console.log("__________EXERCICIOS CHATGPT_________");

console.log(true); // true
console.log(false); // false

let estachovendo = true;
console.log(estachovendo);

let temSol = false;
console.log(temSol);

console.log(10 > 5); // true
console.log(3 > 8); // false
console.log(10 === 10); // true
console.log(10 === "10"); // false

console.log(20 < 30); // true
console.log(50 > 100); // false
console.log(10 >= 10); // true
console.log(9 <= 5); // false
console.log(10 != 10); // false
console.log(5 === "5"); // false
console.log(5 == "5");

console.log("_____TESTE_____");

let idade = 20;
let faixa = idade >= 18;
console.log(faixa); // true

let idade2 = 15;
let faixa2 = idade2 >= 18;
console.log(faixa2); // false

let temcarta = true;
let dirige = idade + temcarta >= 18;
console.log(dirige); // true

let user = "Gabriel";
let senha = "1234";

let login = user == "Gabriel" && senha == "1234";
console.log(login); // true

let temperatura = 35;
let clima = temperatura >= 30 || temperatura <= 10;
console.log(clima); // true

let idade3 = 22;
let temIngresso = true;
let acompanhado = false;

let cinema = (idade3 >= 18 && temIngresso) || acompanhado;
console.log(cinema); // true

let teatro = temIngresso || acompanhado;
console.log(teatro); // true
