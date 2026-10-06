// // Execicios de while e for
// console.log("____Exer while____");
// {
//   let x = 0;
//   while (x <= 10) {
//     console.log(`${x}`);
//     x++;
//   }
//   let xx = 0;
//   while (xx <= 30) {
//     console.log(`${xx}`);
//     xx = xx + 5;
//   }
//   let y = 10;
//   while (y >= 0) {
//     console.log(`${y}`);
//     y--;
//     if (y < 0) {
//       console.log("Fim !");
//     }
//   }
//   for (let i = 0; i <= 20; i++) {
//     if (i % 2 === 0) console.log(`${i}`);
//   }

//   for (let i = 0; i <= 20; i++) {
//     if (i % 2 === 1) console.log(`${i}`);
//   }

//   let soma = 0;
//   for (let i = 0; i <= 10; i++) {
//     soma = soma + i;
//   }
//   console.log(`A soma é ${soma}`);

//   let soma1 = 0;
//   for (let i = 0; i <= 20; i++) {
//     if (i % 2 === 0) soma1 = soma1 + i;
//   }
//   console.log(`A soma é ${soma1}`);

//   for (let i = 1; i <= 10; i++) {
//     console.log(`${i}² = ${i ** 2}`);
//   }

//   let resposta = "sim";

//   while (resposta === "sim") {
//     let tabuada = Number(prompt("Digite o número da tabuada:"));

//     for (let i = 1; i <= 10; i++) {
//       console.log(`${tabuada} x ${i} = ${tabuada * i}`);
//     }

//     resposta = prompt("Deseja fazer outra tabuada? (sim/não)");
//   }

//   console.log("Programa encerrado!");
//   // // metodo antigravity
//   // {
//   // while (true) {
//   //   // 1. Pedimos o número da tabuada (apenas 1 vez por tabuada)
//   //   let tabuada = Number(prompt("Digite o número da tabuada:"));

//   //   console.log(`--- Tabuada do ${tabuada} ---`);

//   //   // 2. O laço 'for' gera as 10 multiplicações
//   //   for (let i = 1; i <= 10; i++) {
//   //     console.log(`${tabuada} x ${i} = ${tabuada * i}`);
//   //   }

//   //   // 3. Perguntamos ao usuário se ele quer fazer outra tabuada
//   //   let resposta = prompt("Deseja fazer outra tabuada? (sim/não)");

//   //   // 4. Se a resposta NÃO for "sim", encerramos o programa com 'break'
//   //   // (.toLowerCase() garante que funcione mesmo se digitar "SIM", "Sim" ou "sim")
//   //   if (resposta.toLowerCase() !== "sim") {
//   //     console.log("Programa encerrado! Obrigado.");
//   //     break; // Sai do laço 'while'
//   //   }
//   // }
//   // }
//   while (true) {
//     let dado = Number(prompt("Digite o numero:"));
//     if (dado === 0) {
//       console.log(`${dado} neutro`);
//       break;
//     } else if (dado > 0) {
//       console.log(`${dado} positivo`);
//     } else {
//       console.log(`${dado} negativo`);
//     }
//   }
// let numPo = 0;
// while (true) {
//   let dado1 = Number(prompt("Digite o valor"));
//   if (dado1 === 0) {
//     console.log("Programa encerrado");
//     break;
//   } else if (dado1 > 0) {
//     numPo++;
//   }
//   console.log(`${dado1}`);
// }
// console.log("voce digitou " + numPo + " numeros positivos");

// let numNe = 0;
// while (true) {
//   let dado2 = Number(prompt("Digite o valor"));
//   if (dado2 === 0) {
//     console.log("Programa encerrado");
//     break;
//   } else if (dado2 < 0) {
//     numNe++;
//   }
//   console.log(`${dado2}`);
// }
// console.log("voce digitou " + numNe + " numeros negativos");

// let senha = Number(1234);
// let tentativa = 0;
// while (tentativa < 3) {
//   let senha_user = Number(prompt("Digite a senha"));
//   if (senha_user === senha) {
//     console.log("Acesso concedido");
//     break;
//   } else if (senha_user != senha) {
//     tentativa++;
//     console.log("Acesso negado");
//   }
// }

// let soma = 0;
// while (true) {
//   let numero = Number(prompt("Digite o numero:"));
//   soma = soma + numero;
//   if (numero === 0) {
//     break;
//   }
// }
// console.log(`Soma:${soma}`);

// let contagem = 0;
// while (true) {
//   let numero = Number(prompt("Digite os numeros:"));
//   if (numero === 0) {
//     break;
//   } else if (numero > 0) {
//     contagem = contagem + 1;
//   }
// }
// console.log(`Você digitou ${contagem} numeros`);

// let soma = 0;
// let contagem = 0;
// while (true) {
//   let numero = Number(prompt("Digite os numeros:"));
//   if (numero === 0) {
//     break;
//   } else if (numero > 0) {
//     contagem = contagem + 1;
//     soma = soma + numero;
//   }
// }
// console.log(`Você digitou ${contagem} numeros \n` + `A soma: ${soma}`);

// let soma = 0,
//   quantidade = 0,
//   media = 0;
// while (true) {
//   let numero = Number(prompt("Digite os numeros:"));
//   if (numero === 0) {
//     break;
//   } else if (numero > 0) {
//     quantidade = quantidade + 1;
//     soma = soma + numero;
//     console.log(`${numero}`);
//   }
// }
// media = soma / quantidade;
// console.log(`Media: ${media}`);

// let maiorN;
// while (true) {
//   let numero = Number(prompt("Digite o numero: "));
//   if (numero === 0) {
//     break;
//   } else if (numero || maiorN) {
//     maiorN = numero;
//     console.log(`${numero}`);
//   }
// }
// console.log(`O maior numero é ${maiorN}`);

// let menorN;
// while (true) {
//   let numero = Number(prompt("Digite o numero: "));
//   if (numero === 0) {
//     break;
//   } else if (numero || menorN) {
//     menorN = numero;
//     console.log(`${numero}`);
//   }
// }
// console.log(`O menor numero é ${menorN}`);

// let quantidade = 0,
//   senha = Number(1234),
//   tentativa = 0;
// while (true) {
//   let senha_user = Number(prompt("Digite a senha"));
//   if (senha_user === senha) {
//     console.log(
//       `Acesso concedido\n` +
//         `Foram necessarias ${quantidade} tentativas de login`,
//     );
//     break;
//   } else if (senha_user != senha) {
//     tentativa++;
//     quantidade = tentativa;
//     // console.log("Acesso negado, tente novamente");
//   }
// }

let quantidade = 0;
((soma = 0), (media = 0), (numP = 0), (numN = 0));
let maiorN;
let menorN;
while (true) {
  let numero = Number(prompt("Digite os numeros"));
  if (numero === 0) {
    console.log("Programa encerrado");
    break;
  } else if (numero > 0) {
    (quantidade++, (soma = soma + numero), numP++);
    console.log(`${numero}`);
  } else if (numero < 0) {
    (quantidade++, numN++, (soma = soma + numero));
    console.log(`${numero}`);
  }
  if (maiorN === undefined || numero > maiorN) {
    maiorN = numero;
  }
  if (menorN === undefined || numero < menorN) {
    menorN = numero;
  }
}

media = soma / quantidade;
console.log(`Quantidade de números:${quantidade} \n
Soma:${soma} \n
Média:${media}\n
Maior número:${maiorN}\n
Menor número:${menorN}\n
Quantidade de positivos:${numP}\n
Quantidade de negativos:${numN}`);

// /// resolução antigravity
// {
//   let quantidade = 0;
//   let soma = 0;
//   let numP = 0; // Quantidade de positivos
//   let numN = 0; // Quantidade de negativos
//   let maiorN;
//   let menorN;

//   while (true) {
//     let numero = Number(prompt("Digite um número (ou 0 para encerrar):"));

//     // Condição de parada (0 encerra o programa)
//     if (numero === 0) {
//       console.log("Programa encerrado");
//       break;
//     }

//     // 1. Atualiza quantidade e soma (para QUALQUER número diferente de 0)
//     quantidade++;
//     soma = soma + numero;

//     // 2. Conta se é positivo ou negativo
//     if (numero > 0) {
//       numP++;
//     } else if (numero < 0) {
//       numN++;
//     }

//     // 3. Define o maior e o menor número
//     // Se for o primeiro número digitado, ele é tanto o maior quanto o menor
//     if (quantidade === 1) {
//       maiorN = numero;
//       menorN = numero;
//     } else {
//       if (numero > maiorN) {
//         maiorN = numero;
//       }
//       if (numero < menorN) {
//         menorN = numero;
//       }
//     }
//   }

//   // Calcula a média apenas se algum número foi digitado (evita divisão por zero)
//   let media = quantidade > 0 ? soma / quantidade : 0;

//   // Exibição dos resultados finais
//   console.log(`Quantidade de números: ${quantidade}`);
//   console.log(`Soma: ${soma}`);
//   console.log(`Média: ${media}`);
//   console.log(`Maior número: ${maiorN !== undefined ? maiorN : "Nenhum"}`);
//   console.log(`Menor número: ${menorN !== undefined ? menorN : "Nenhum"}`);
//   console.log(`Quantidade de positivos: ${numP}`);
//   console.log(`Quantidade de negativos: ${numN}`);
// }

// }
// //Final}
