let idade = 20;
if (idade > 18) {
  console.log("pode dirigir");
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
