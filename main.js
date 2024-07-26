//Importações
const prompt = require("prompt-sync")();
const chalk = require("chalk");
const divisoria = require("./elementosGraficos/divisoria");
const espacamento = require("./elementosGraficos/espacamento");
const boasVindas = require("./telas/boasVindas");
const devolucao = require("./telas/devolucao");
const informacoes = require("./telas/informacoes");
const livrosConsulta = require("./telas/livrosConsulta");
const login = require("./telas/login");
const menuPrincipal = require("./telas/menuPrincipal");

// Mensagem de boas vindas
boasVindas.mostrarTela();

// Login
login.mostrarTela();

// Se o usuário for um pilantras, o programa avisará que há débitos a pagar

// Se a opção selecionada não for válida (digitar um número que não seja 1, 2, 3, 4 ou 5) o programa avisará com um erro e voltará a pedir ao usuário a opção que ele deseja selecionar
while (true) {
  // Menu Principal
  menuPrincipal.mostrarTela();
  espacamento();
  let opcaoEscolhida = parseInt(prompt(chalk.rgb(255,0,255)`Digite a opção desejada → `));

  switch (opcaoEscolhida) {
    case 1:

      if (login.contaLogada.debito > 0){
        divisoria();
        console.log(chalk.rgb(255,255,0)`Atenção: você possui débitos em aberto em nosso sistema!`);
        console.log(chalk.rgb(255,255,0)`Regularize sua situação assim que possível para poder voltar a usar o serviço de empréstimo de livros.`);
      } else {
        livrosConsulta.mostrarTela();
      }
      break;
    case 2:
      devolucao.mostrarTela();
      break;

    case 3:
      login.checandoDebito();
      break;

    case 4:
      informacoes.mostrarTela();
      break;

    case 5:
      espacamento();
      console.log(chalk.rgb(255,255,0)`Encerrando programa...`);
      divisoria()
      process.exit();
      break;

    default:
      espacamento();
      console.log(chalk.rgb(255,0,0)`ERRO: Selecione uma opção válida!`);
      break;
  }
}
