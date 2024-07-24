const prompt = require("prompt-sync")({ sigint: true });
const listaLivros = require("../bancoDados/bancoLivros");
const divisoria = require("../elementosGraficos/divisoria");
const espacamento = require("../elementosGraficos/espacamento");
const limparCarrinho = require("./limparCarrinho");

// const listaDeLivros = listaLivros;
// let carrinho = [];

const carrinhoObj = {

    conteudo: [],
    opcaoValida: null,

    mostrarTela: function () {

        this.opcaoValida = false;

        while (!this.opcaoValida) {
            divisoria();
            console.log(`              Meu Carrinho`);
            espacamento();
            this.visualizarCarrinho();

            divisoria();
            console.log(` 1 → Remover o 1º Livro`);
            console.log(` 2 → Remover o 2º Livro`);
            console.log(` 3 → Remover o 3º Livro`);
            console.log(` 8 → Escolher mais um Livro`);
            console.log(` 9 → Finalizar Carrinho`);
            console.log(` 0 → Limpar Carrinho`);
            divisoria();
            let acao = prompt("Selecione a opção que você deseja → ");
            espacamento();

            switch (acao) {
                case "1":
                case "2":
                case "3":
                    var remover = parseInt(acao);
                    if (this.conteudo[remover - 1]) {
                        var indice = this.conteudo[remover - 1].titulo;
                        this.conteudo.splice(remover - 1, 1);
                        console.log(`Livro "${indice}" removido do carrinho.`);
                    } else {
                        console.log("Erro: Não há livro neste espaço do carrinho para remover.");
                    }
                    break;
                case "8":
                    if (this.conteudo.length < 3) {
                        this.opcaoValida = true;
                    } else {
                        divisoria();
                        console.log("Seu carrinho está cheio!");
                        divisoria();
                    }
                    break;
                case "9":
                    if (this.conteudo.length === 0) {
                        console.log(`ERRO: Seu carrinho está vazio!`);
                    } else {
                        this.finalizarCarrinho();
                    }
                    break;
                case "0":
                    if (this.conteudo.length === 0) {
                        console.log(`ERRO: Seu carrinho está vazio!`);
                    } else {
                        console.log(`Limpando carrinho...`);
                        this.conteudo = [];
                        limparCarrinho.mostrarTela();
                        if(limparCarrinho.voltarParaConsulta) {
                            this.opcaoValida = true;
                        }
                    }
                    break;
                default:
                    console.log("Ação inválida. Por favor, tente novamente!");
                    break;
            }
        }
    },
    adicionarLivro: function (livro) {

        this.conteudo.push(livro);
        espacamento();
        console.log(`Livro "${livro.titulo}" adicionado ao carrinho.`);

    },
    visualizarCarrinho: function () {
        console.log("Livros no carrinho:");
        espacamento();
        this.conteudo.forEach(livro => {
            console.log(`- "${livro.titulo}" de ${livro.autor}`);
        });
    },
    finalizarCarrinho: function () {
        console.log("Finalizando o carrinho...");
        divisoria();
        console.log(`              Recibo`);
        espacamento();
        this.visualizarCarrinho();
        espacamento();
        const hoje = new Date();
        const dataLimite = new Date(hoje);
        dataLimite.setDate(hoje.getDate() + 7);
        const opcoes = { year: 'numeric', month: '2-digit', day: '2-digit' };
        const dataLimiteFormatada = dataLimite.toLocaleDateString('pt-BR', opcoes);
        console.log(`Data limite para devolução dos livros: ${dataLimiteFormatada}`);
        espacamento();
        console.log(`Apresente este recibo ao bibliotecário para que ele forneça os livros solicitados.`);
        divisoria();
        process.exit();
    }
};

module.exports = carrinhoObj;