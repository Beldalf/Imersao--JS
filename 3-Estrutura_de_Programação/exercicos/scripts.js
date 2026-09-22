// exercicios while
console.log("________exercicios while______");
{
  let xx = 0;
  let x = 0;
  while (xx <= 10) {
    console.log("X é igual a " + xx);
    xx = xx + 1;
  }

  let y = 10;
  while (y >= 0) {
    console.log("Lançamento em " + y);
    y = y - 1;
  }

  while (x <= 20) {
    if (x % 2 === 0) console.log("X é igual a " + x);
    x = x + 1;
  }

  let tabuada = Number(prompt("Digite o valor")),
    z = 1;
  while (z <= 10) {
    console.log(tabuada + " x " + z + " = " + tabuada * z);
    z = z + 1;
  }

  let senha_user = "1234";
  let senha = prompt("Digite a senha");

  while (senha != senha_user) {
    console.log("Senha errada");
    senha = prompt("Digite a senha novamente ");
  }
  console.log("senha correta ");

  let contagem = prompt("digite o numero");
  let e = 0;

  while (e <= contagem) {
    console.log("lançamento em " + e);
    e = e + 1;
  }

  let soma = 0;

  while (true) {
    let numero = Number(prompt("Digite o valor"));
    if (numero == 0) {
      break;
    }
    soma = soma + numero;
  }
  console.log("A soma é " + soma);

  while (true) {
    let numero = Number(prompt("Digite um número (ou 0 para sair):"));
    if (numero === 0) {
      console.log("Programa encerrado.");
      break;
    }
    if (numero > 0) {
      console.log(numero + " -> Positivo");
    } else {
      console.log(numero + " -> Negativo");
    }
  }
  let quantidadePositiva = 0;
  while (true) {
    let contgemPo = Number(
      prompt("digite os valores(digite 0 para encerrar):"),
    );
    if (contgemPo === 0) {
      break;
    } else if (contgemPo > 0) {
      quantidadePositiva++; //é o mesmo que quantidadePositiva = quantidadePositiva + 1
    }
  }
  console.log("Você digitou " + quantidadePositiva + " numeros positivos");
}
// exercicios for
console.log("________exercicios for______");
{
  for (let i = 0; i < 10; i = i + 1) {
    console.log(`Missisipi ${i + 1}`);
  }

  for (let i = 10; i > 0; i = i - 1) {
    console.log(`Lançamento em ${i}`);
  }

  for (let i = 0; i <= 20; i = i + 2) {
    console.log(`é ${i}`);
  }

  for (let i = 0; i <= 20; i = i + 1) {
    if (i % 2 === 0) console.log(`Agora é ${i}`);
  }

  for (let i = 0; i <= 20; i = i + 1) {
    if (i % 2 === 1) console.log(`${i} è impar`);
  }

  let tabuada = Number(prompt("Digite o numero"));
  for (let i = 0; i <= 10; i = i + 1) {
    console.log(tabuada + " x " + i + " = " + tabuada * i);
  }
  let soma1 = 0;
  for (let i = 0; i <= 100; i = i + 1) {
    soma1 = soma1 + i;
    console.log(`A soma é ${soma1}`);
  }

  for (i = 0; i <= 100; i = i + 1) {
    if (i % 5 === 0) console.log(`${i} divisivel 5`);
  }
  let soma = 0;
  for (i = 1; i <= 5; i = i + 1) {
    let numero = Number(prompt(`digite o ${i} numeros:`));
    soma = soma + numero;
  }
  let Media = soma / 5;
  console.log(`Media: ${Media}`);

  let maior;
  for (let i = 1; i <= 5; i = i + 1) {
    let valor = Number(prompt(`Digite o ${i}º número:`));
    if (i === 1 || valor > maior) {
      maior = valor;
    }
  }
  console.log(`O maior número foi: ${maior}`);

  while (true) {
    let opcao = Number(
      prompt(
        "===== MENU =====\n" +
          "1 - Dizer Olá\n" +
          "2 - Mostrar números de 1 a 10\n" +
          "3 - Mostrar números pares (de 2 a 20)\n" +
          "0 - Sair\n\n" +
          "Escolha uma opção:",
      ),
    );
    if (opcao === 0) {
      console.log("Saindo do programa... Até mais!");
      break; // Encerra o laço 'while'
    } else if (opcao === 1) {
      console.log("Olá! Seja muito bem-vindo(a)!");
    } else if (opcao === 2) {
      console.log("--- Números de 1 a 10 ---");
      for (let i = 1; i <= 10; i++) {
        console.log(i);
      }
    } else if (opcao === 3) {
      console.log("--- Números Pares de 2 a 20 ---");
      for (let i = 2; i <= 20; i += 2) {
        console.log(i);
      }
    } else {
      console.log("Opção inválida! Por favor, escolha uma opção entre 0 e 3.");
    }
  }
}
