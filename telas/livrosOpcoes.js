const chalk = require('chalk');
const divisoria = require('../elementosGraficos/divisoria');
const carrinhoObj = require('./carrinho');
const espacamento = require('../elementosGraficos/espacamento');

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

            console.log("Opções: ");
            espacamento();
            console.log('1 → Adicionar um livro da lista ao carrinho');
            console.log('2 → Fazer uma nova busca');
            console.log('3 → Voltar ao menu principal');
            console.log('0 → Sair do sistema');
            espacamento();

            opcaoEscolhida = Number(prompt(chalk.rgb(255,0,255)`Digite a opção desejada → `))
            espacamento();

            switch (opcaoEscolhida) {
                case 1:
                    opcaoEscolhida = Number(prompt(chalk.rgb(255,0,255)`Digite o número do livro para adicioná-lo ao carrinho → `))

                    if (opcaoEscolhida >= 1 && opcaoEscolhida <= livros.length) {
                        this.opcaoValida = true;
                        this.livroEscolhido = livros[opcaoEscolhida-1]

                        carrinhoObj.adicionarLivro(this.livroEscolhido);
                        carrinhoObj.mostrarTela();
                    } else {
                        console.log(chalk.rgb(255,0,0)`Opção inválida. Por favor, tente novamente.`);
                        espacamento();
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
                    console.log(chalk.rgb(255,255,0)`Encerrando programa... `);
                    process.exit();
                    break;
                default:
                    console.log(chalk.rgb(255,0,0)`Opção inválida. Por favor, tente novamente.`);
                    espacamento();
                break;
            }
        }
    }
}

module.exports = livroOpcoes;