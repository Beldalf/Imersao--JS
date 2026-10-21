//exercicio 1
let frutas = ["Banana", "Uva", "Pera"];
console.log(frutas);
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
// exercicio 2
let steam = ["Cod", "Bf", "Bg3", "ESO"];
console.log(steam[0]);
console.log(steam[3]);
//exercicio 3
let numeros = [1, 2, 3, 4, 5];
console.log(numeros.length);
//exercicio 4
let cores = ["azul", "vermelho", "verde"];
cores[1] = "rosa";
console.log(cores);
//exercicio 5
let prato = ["arroz", "bife"];
prato.push("feijão", "salada");
console.log(prato);
//exercicio 6
let num = [1, 2, 3, 4, 5];
num.pop();
console.log(num);
//exercico 7
let lingua = ["Python", "JS", "PHP", "JAVA", "SQL"];
console.log(lingua.includes("GO"));
//exercicoi 8
let nomes = ["Gabriel", "Guilherme", "Geraldo", "Katia", "Michele"];
for (let i = 0; i < nomes.length; i++) {
  console.log("Bem vindo " + nomes[i]);
}
//exercico 9
let pessoa = {
  nome: "Gabriel",
  idade: 25,
  cidade: "São Paulo",
};
console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.cidade);
//exercicio 10
let carro = {
  marca: "BMW",
  modelo: "X6",
  ano: 2020,
};
carro.ano = 2026;
console.log(carro);
//exercicio 11
let livro = {
  titulo: "Duna",
  autor: "fulano",
};
livro.paginas = 400;
delete livro.autor;
console.log(livro);
//exercicio 12
let produto = {
  nome: "café",
  preco: 30,
};
console.log(produto["nome"]);
console.log(produto["preco"]);
//exercicio 13
let alunos = [
  {
    nome: "Gabriel",
    nota: 7,
  },
  {
    nome: "Guilherme",
    nota: 9,
  },
  {
    nome: "Geraldo",
    nota: 4,
  },
];

console.log(alunos[1].nome);
//exercicio 14
for (let i = 0; i < alunos.length; i++) {
  console.log(alunos[i].nome);
}
//exercicio 15
let Gog = [
  {
    nome: "age of emperes",
    genero: "estrategia",
    jogadores: 1,
  },
  {
    nome: "Resi",
    genero: "terror",
    jogadores: 1,
  },
  {
    nome: "Overcookd",
    genero: "puzzle",
    jogadores: 4,
  },
];
for (let i = 0; i < Gog.length; i++) {
  console.log(Gog[i].nome);
}
