const prompt = require("prompt-sync")({ sigint: true });
const divisoria = require("../elementosGraficos/divisoria");
const menuPrincipal = require("../telas/menuPrincipal");
const carrinhoObj = require("./carrinho");

const limparCarrinho = {

  voltarParaConsulta: null,
  voltarMenuPrincipal: null,

  mostrarTela: function () {
    this.voltarParaConsulta = false;
    this.voltarMenuPrincipal = false;

    console.log(`              Seu carrinho foi limpo!`);
    console.log(` 1 → Voltar para a consulta de Livros`);
    console.log(` 2 → Menu Principal`);
    console.log(` 3 → Sair do Sistema`);
    let escolha = parseInt(prompt(`Selecione seu próximo passo: `));

 
    switch (escolha) {
      case 1:
        this.voltarParaConsulta = true;
        break;
      case 2:
        this.voltarParaConsulta = true;
        this.voltarMenuPrincipal = true;
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
  },
};

module.exports = limparCarrinho;