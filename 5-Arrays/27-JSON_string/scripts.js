let pessoa = {
  nome: "Gabriel",
  idade: 25,
  profissao: "programadar",
  hobbies: ["chorar", "vencer", "Jogar", "fazer merda", "ver filme"],
};

let pessoaTexto = JSON.stringify(pessoa);

console.log(pessoaTexto);

let pessoaJSON = JSON.parse(pessoaTexto);

console.log(pessoaJSON);

console.log(pessoaJSON.hobbies[0]);
