const prompt = require("prompt-sync")();
const divisoria = require("../elementosGraficos/divisoria");
const espacamento = require("../elementosGraficos/espacamento");

const devolucao = {
  mostrarTela: function () {
    
    divisoria()
    console.log("Devolução / Renovação de empréstimos");
    espacamento()
    console.log("1 → Devolver livros");
    console.log("2 → Renovar empréstimos");

    while (true) {
            espacamento()
            var opcaoEscolhida = parseInt(prompt("Digite a opção desejada → "));
            divisoria()
        switch (opcaoEscolhida) {
            case 1:
              console.log("Para devolver livros, dirija-se ao balcão de devolução.");
              divisoria();
              process.exit();
              break;
      
            case 2:
              console.log("Para renovar empréstimos, dirija-se ao bibliotecário de plantão.");
              divisoria();
              process.exit();
              break;
      
            default:
              console.log("Opção inválida! Tente novamente.");
              espacamento()
              break
          }
    }
  },
};

module.exports = devolucao;