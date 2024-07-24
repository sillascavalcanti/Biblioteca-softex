//Importações
const prompt = require("prompt-sync")();
const divisoria = require("./elementosGraficos/divisoria");
const boasVindas = require("./telas/boasVindas");
const carrinhoObj = require("./telas/carrinho");  // Importando apenas o carrinhoObj
const login = require("./telas/login");
const menuPrincipal = require("./telas/menuPrincipal");

// Mensagem de boas vindas
boasVindas.mostrarTela();

// Login
login.mostrarTela();

// Se o usuário for um pilantras, o programa avisará que há débitos a pagar

// Menu Principal
menuPrincipal.mostrarTela();

// Se a opção selecionada não for válida (digitar um número que não seja 1, 2, 3, 4 ou 5) o programa avisará com um erro e voltará a pedir ao usuário a opção que ele deseja selecionar
while (true) {
  let opcaoEscolhida = parseInt(prompt(" → "));

  if (!isNaN(opcaoEscolhida) && opcaoEscolhida > 0 && opcaoEscolhida < 6) {
    switch (opcaoEscolhida) {
      case 1:
        carrinhoObj.mostrarTela();
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

      default:
        console.log(`Encerrando programa...`);
        process.exit();
        break;
    }
    break;
  } else {
    console.log(`ERRO: Selecione uma opção válida!`);
  }
}
