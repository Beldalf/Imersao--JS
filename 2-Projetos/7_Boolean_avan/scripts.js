console.log(1 > 2); //boolean maior que o outro
console.log(5 < 10); //boolean menor que o outro
console.log(3 >= 3); //boolean maior ou igual que o outro
console.log(5 <= 4); //boolean menor ou igual que o outro
console.log(5 == 4); //boolean igual a false pois não são identicos
console.log("Gabriel" != "Gabriel"); //boolean igual a false pois são identicos
console.log(5 === "5"); //boolean igual a false pois não são identicos e não são do mesmo tipo
console.log(4 === 4); //boolean igual a identico e do mesmo tipo

// EXERCICIOS //
{
  console.log("_________________  Exercicios  _______________________");

  console.log(10 > 2); //maior que
  console.log(5 < 10); //menor que
  console.log(50 <= 32); //menor ou igual que
  console.log(10 >= 20); //maior ou igual que
  console.log("maria" != "João"); //diferente de
  console.log(58 == 58); //igual a
  console.log(64 === 64); //igual a e do mesmo tipo
}

//Execicios CHATGPT//
{
  console.log("____________  Exercicios_Chatgpt  ___________________");

  let isOnline = true;
  console.log(isOnline);

  let isLoggedIn = false;
  console.log(isLoggedIn);

  let maiorDeIdade = true;
  let menorDeIdade = false;
  console.log(maiorDeIdade);
  console.log(menorDeIdade);

  console.log(true && true); //boolean and (e) retorna true se ambos forem true
  console.log(true && false); //boolean and (e) retorna false se um dos dois for false
  console.log(true || true); //boolean or (ou) retorna true se um dos dois for true
  console.log(true || false); //boolean or (ou) retorna true se um dos dois for true
  console.log(false || true); //boolean or (ou) retorna true se um dos dois for true

  let idade = 20;
  let isAdult = idade >= 18;
  console.log(isAdult);

  let idade2 = 15;
  let isAdult2 = idade2 >= 18;
  console.log(isAdult2);

  let dinheiro = 100;
  let preco = 80;
  let venda = dinheiro >= preco;
  console.log(venda);

  let user = "Gabriel";
  let senha = "123456";
  let login = user == "Gabriel" && senha == "123456";
  console.log(login);
}
