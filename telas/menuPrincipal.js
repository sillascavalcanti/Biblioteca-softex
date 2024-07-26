//Importações
const prompt = require("prompt-sync")();
const divisoria = require("../elementosGraficos/divisoria");
const espacamento = require("../elementosGraficos/espacamento");

//Menu Principal
const menuPrincipal = {

  mostrarTela: function () {
    divisoria();
    console.log(`              Menu Principal`);
    espacamento();
    console.log(` 1 → Empréstimo de Livro(s)`);
    console.log(` 2 → Devolução/Renovação de Livro(s)`);
    console.log(` 3 → Quitação de Débito(s)`);
    console.log(` 4 → Informações`);
    console.log(` 5 → Sair do Sistema`);
  },
};

//Exportação
module.exports = menuPrincipal;
