//Importações
const prompt = require("prompt-sync")();
const divisoria = require("./elementosGraficos/divisoria");
const boasVindas = require("./telas/boasVindas");
const carrinhoObj = require("./telas/carrinho");  // Importando apenas o carrinhoObj
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
  let opcaoEscolhida = parseInt(prompt(" → "));

  switch (opcaoEscolhida) {
    case 1:

      if (login.contaLogada.debito > 0){
        divisoria();
        console.log('Atenção: você possui débitos em aberto em nosso sistema!');
        console.log('Regularize sua situação assim que possível para poder voltar a usar o serviço de empréstimo de livros.');
        divisoria();
      } else {
        livrosConsulta.mostrarTela();
      }
      break;
    case 2:
      console.log(`Aqui fica a função de devolução / renovação`);
      break;

    case 3:
      console.log(`Aqui fica a função de quitação`);
      break;

    case 4:
      console.log(`Aqui fica a função de informações`);
      break;

    case 5:
      console.log(`Encerrando programa...`);
      process.exit();
      break;

    default:
      console.log(`ERRO: Selecione uma opção válida!`);
      break;
  }
}

