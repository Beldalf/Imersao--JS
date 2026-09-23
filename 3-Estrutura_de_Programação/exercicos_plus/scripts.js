// Execicios de while e for
console.log("____Exer while____");
{
  let x = 0;
  while (x <= 10) {
    console.log(`${x}`);
    x++;
  }
  let xx = 0;
  while (xx <= 30) {
    console.log(`${xx}`);
    xx = xx + 5;
  }
  let y = 10;
  while (y >= 0) {
    console.log(`${y}`);
    y--;
    if (y < 0) {
      console.log("Fim !");
    }
  }
  for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) console.log(`${i}`);
  }

  for (let i = 0; i <= 20; i++) {
    if (i % 2 === 1) console.log(`${i}`);
  }

  let soma = 0;
  for (let i = 0; i <= 10; i++) {
    soma = soma + i;
  }
  console.log(`A soma é ${soma}`);

  let soma1 = 0;
  for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) soma1 = soma1 + i;
  }
  console.log(`A soma é ${soma1}`);

  for (let i = 1; i <= 10; i++) {
    console.log(`${i}² = ${i ** 2}`);
  }

  let resposta = "sim";

  while (resposta === "sim") {
    let tabuada = Number(prompt("Digite o número da tabuada:"));

    for (let i = 1; i <= 10; i++) {
      console.log(`${tabuada} x ${i} = ${tabuada * i}`);
    }

    resposta = prompt("Deseja fazer outra tabuada? (sim/não)");
  }

  console.log("Programa encerrado!");
  // // metodo antigravity
  // {
  // while (true) {
  //   // 1. Pedimos o número da tabuada (apenas 1 vez por tabuada)
  //   let tabuada = Number(prompt("Digite o número da tabuada:"));

  //   console.log(`--- Tabuada do ${tabuada} ---`);

  //   // 2. O laço 'for' gera as 10 multiplicações
  //   for (let i = 1; i <= 10; i++) {
  //     console.log(`${tabuada} x ${i} = ${tabuada * i}`);
  //   }

  //   // 3. Perguntamos ao usuário se ele quer fazer outra tabuada
  //   let resposta = prompt("Deseja fazer outra tabuada? (sim/não)");

  //   // 4. Se a resposta NÃO for "sim", encerramos o programa com 'break'
  //   // (.toLowerCase() garante que funcione mesmo se digitar "SIM", "Sim" ou "sim")
  //   if (resposta.toLowerCase() !== "sim") {
  //     console.log("Programa encerrado! Obrigado.");
  //     break; // Sai do laço 'while'
  //   }
  // }
  // }
}
//Final}
