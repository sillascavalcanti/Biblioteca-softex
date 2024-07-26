const prompt = require("prompt-sync")({ sigint: true });
const chalk = require("chalk");
const divisoria = require("../elementosGraficos/divisoria");
const espacamento = require("../elementosGraficos/espacamento");

const limparCarrinho = {

  voltarParaConsulta: null,
  voltarMenuPrincipal: null,

  mostrarTela: function () {
    this.voltarParaConsulta = false;
    this.voltarMenuPrincipal = false;

    
    console.log(chalk.rgb(255,255,0)`              Seu carrinho foi limpo!`);
    espacamento();
    console.log(` 1 → Voltar para a consulta de Livros`);
    console.log(` 2 → Menu Principal`);
    console.log(` 3 → Sair do Sistema`);
    espacamento();
    let escolha = parseInt(prompt(chalk.rgb(255,0,255)`Selecione seu próximo passo → `));

 
    switch (escolha) {
      case 1:
        this.voltarParaConsulta = true;
        break;
      case 2:
        this.voltarParaConsulta = true;
        this.voltarMenuPrincipal = true;
        break;
      case 3:
        console.log(chalk.rgb(255,255,0)`Saindo do sistema...`);
        divisoria();
        process.exit();
        break;
      default:
        console.log(chalk.rgb(255,0,0)`Ação inválida. Por favor, tente novamente!`);
        divisoria();
        break;
    } 
  },
};

module.exports = limparCarrinho;