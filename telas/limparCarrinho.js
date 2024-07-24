const prompt = require("prompt-sync")({ sigint: true });
const divisoria = require("../elementosGraficos/divisoria");
const menuPrincipal = require("../telas/menuPrincipal");
const carrinhoObj = require("../telas/carrinho");

const limparCarrinho = {
  mostrarTela: function () {
    console.log(`              Seu carrinho foi limpo!`);
    console.log(` 1 → Voltar para a consulta de Livros`);
    console.log(` 2 → Menu Principal`);
    console.log(` 3 → Sair do Sistema`);
    let escolha = parseInt(prompt(`Selecione seu próximo passo: `));

    if (!isNaN(escolha) && escolha > 0 && escolha < 4) {
      switch (escolha) {
        case 1:
          // Voltar para consulta de livros
          break;
        case 2:
          // Voltar para o menu principal
          break;
        case 3:
          console.log(`Saindo do sistema...`);
          divisoria();
          process.exit();
          break;
        default:
          console.log("Ação inválida. Por favor, tente novamente!");
          divisoria();
          break;
      } 
    } else {
      console.log(`ERRO: Selecione uma opção válida!`);
    }
  },
};

module.exports = limparCarrinho;