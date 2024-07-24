const divisoria = require('../elementosGraficos/divisoria');
const carrinhoObj = require('./carrinho');

const prompt = require('prompt-sync')();

const livroOpcoes = {

    opcaoValida: null,
    livroEscolhido: null,
    voltarMenuPrincipal: null,

    mostrarTela: function(livros) {

        var opcaoEscolhida;
        this.opcaoValida = false;
        this.voltarMenuPrincipal = false;

        while(!this.opcaoValida) {

            divisoria();
            console.log("Opções: ");

            console.log('1 -> Adicionar um livro da lista ao carrinho');
            console.log('2 -> Fazer uma nova busca');
            console.log('3 -> Voltar ao menu principal');
            console.log('0 -> Sair do sistema');
            console.log('');

            opcaoEscolhida = Number(prompt('Digite a opção desejada: '))
            console.log('');

            switch (opcaoEscolhida) {
                case 1:
                    opcaoEscolhida = Number(prompt('Digite o número do livro para adicioná-lo ao carrinho: '))
                    console.log('');

                    if (opcaoEscolhida >= 1 && opcaoEscolhida <= livros.length) {
                        this.opcaoValida = true;
                        this.livroEscolhido = livros[opcaoEscolhida-1]

                        carrinhoObj.adicionarLivro(this.livroEscolhido);
                        carrinhoObj.mostrarTela();
                    }
                break;
                
                case 2:
                    this.opcaoValida = true;
                break;

                case 3:
                    this.opcaoValida = true;
                    this.voltarMenuPrincipal = true;
                break;

                case 0:
                    console.log('Encerrando programa... ');
                    process.exit();
                    break;
                default:
                    console.log(`Opção inválida. Por favor, tente novamente.`);
                    console.log('');
                break;
            }
        }
    }
}

module.exports = livroOpcoes;