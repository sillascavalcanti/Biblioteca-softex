//Importações
const prompt = require("prompt-sync")();
const divisoria = require("../elementosGraficos/divisoria");

//Menu Principal
const menuPrincipal = {
  sairSistema: false,
  opcaoEscolhida: 0,

  mostrarTela: function () {
    console.log(`              Menu Principal`);
    console.log(` 1 → Emprestimo de Livro(s)`);
    console.log(` 2 → Devolução/Renovção de Livro(s)`);
    console.log(` 3 → Quitação de Débito(s)`);
    console.log(` 4 → Informações`);
    console.log(` 5 → Sair do Sistema`);
    divisoria();
  },
};

//Exportação
module.exports = menuPrincipal;
