const prompt = require("prompt-sync")({ sigint: true });
const listaLivros = require("../bancoDados/bancoLivros");
const divisoria = require("../elementosGraficos/divisoria");
const espacamento = require("../elementosGraficos/espacamento");
const limparCarrinho = require("../telas/limparCarrinho");

const listaDeLivros = listaLivros;
let carrinho = [];

const carrinhoObj = {
    mostrarTela: function () {
        while (true) {
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
                    if (carrinho[remover - 1]) {
                        var indice = carrinho[remover - 1].titulo;
                        carrinho.splice(remover - 1, 1);
                        console.log(`Livro "${indice}" removido do carrinho.`);
                    } else {
                        console.log("Erro: Não há livro neste espaço do carrinho para remover.");
                    }
                    break;
                case "8":
                    if (carrinho.length < 3) {
                        this.adicionarLivro();
                        this.visualizarCarrinho();
                    } else {
                        divisoria();
                        console.log("Seu carrinho está cheio!");
                        divisoria();
                    }
                    break;
                case "9":
                    if (carrinho.length === 0) {
                        console.log(`ERRO: Seu carrinho está vazio!`);
                    } else {
                        this.finalizarCarrinho();
                    }
                    break;
                case "0":
                    if (carrinho.length === 0) {
                        console.log(`ERRO: Seu carrinho está vazio!`);
                    } else {
                        console.log(`Limpando carrinho...`);
                        carrinho = [];
                        limparCarrinho.mostrarTela();
                    }
                    break;
                default:
                    console.log("Ação inválida. Por favor, tente novamente!");
                    break;
            }
        }
    },
    adicionarLivro: function () {
        let escolha = prompt(`Informe o livre que você deseja → `);
        escolha = parseInt(escolha);
        if (isNaN(escolha) || escolha < 1 || escolha > listaDeLivros.length) {
            espacamento();
            console.log("Escolha inválida. Tente novamente.");
        } else {
            carrinho.push(listaDeLivros[escolha - 1]);
            espacamento();
            console.log(`Livro "${listaDeLivros[escolha - 1].titulo}" adicionado ao carrinho.`);
        }
    },
    visualizarCarrinho: function () {
        console.log("Livros no carrinho:");
        espacamento();
        carrinho.forEach(livro => {
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

module.exports = carrinhoObj, this.mostrarTela;