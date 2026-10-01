let nome = "Gabriel";
for (let i = 0; i < 10; i = i + 1) {
  if (i == 3) {
    nome = "Bel";
  }

  if (i == 5 && nome == "Bel") {
    console.log("o nome é Bel, pode parar");
    break;
  }

  console.log(i);
}
