const prompt = require('prompt-sync')();
const chalk = require('chalk');
const bancoLivros = require('../bancoDados/bancoLivros');
const divisoria = require('../elementosGraficos/divisoria');
const espacamento = require('../elementosGraficos/espacamento');
const limparCarrinho = require('./limparCarrinho');
const livrosBuscaPalavra = require('./livrosBuscaPalavra');
const livrosGeneros = require('./livrosGeneros');
const livrosListagem = require('./livrosListagem');
const livrosOpcoes = require('./livrosOpcoes');

const livrosConsulta = {

    livrosFiltrados: [],
    opcaoValida: null,

    mostrarTela: function() {;

        var opcaoEscolhida;
        this.opcaoValida = false;

        while(!this.opcaoValida) {
            divisoria();
            console.log('              Consulta de livros');
            espacamento();
            console.log('Selecione uma das opções de busca: ');
            espacamento();
            
            console.log('1 → Listar todos os livros');
            console.log('2 → Buscar por Gênero');
            console.log('3 → Buscar por Autor');
            console.log('4 → Buscar por Título');
            console.log('5 → Pedir uma sugestão');
            espacamento();

            opcaoEscolhida = Number(prompt(chalk.rgb(255,0,255)`Digite a opção desejada → `))
         
            switch (opcaoEscolhida) {
                case 1:
                    this.livrosFiltrados = bancoLivros;
                    divisoria()
                    console.log(`Listando todos os livros do acervo: `);
                break;

                case 2:
                    livrosGeneros.mostrarTela();
                    this.livrosFiltrados = livrosGeneros.livrosFiltrados;
                    divisoria()
                    console.log(`Listando todos os livros do gênero: ${livrosGeneros.generoEscolhido}`);
                break;

                case 3:
                    livrosBuscaPalavra.mostrarTela('autor');
                    this.livrosFiltrados = livrosBuscaPalavra.livrosFiltrados;

                    if (livrosBuscaPalavra.buscaEncontrada) {
                        this.opcaoValida = true;

                        divisoria();
                        console.log(`Listando todos os livros com autor: "${livrosBuscaPalavra.palavraChave}"`);
                    }
                break;

                case 4:
                    livrosBuscaPalavra.mostrarTela('titulo');
                    this.livrosFiltrados = livrosBuscaPalavra.livrosFiltrados;

                    if (livrosBuscaPalavra.buscaEncontrada) {
                        divisoria();
                        console.log(`Listando todos os livros com titulo: "${livrosBuscaPalavra.palavraChave}"`);
                    }
                break;

                case 5:
                    this.opcaoValida = true;

                    divisoria();
                    console.log(`              Sugestão de leitura`);
                    espacamento();
                    console.log(`Para receber uma sugestão, por favor, consulte o bibliotecário de plantão.`);
                    espacamento();
                    prompt()
                break;
            
                default:
                    espacamento();
                    console.log(chalk.rgb(255,0,0)`Opção inválida. Por favor, tente novamente.`);
                break;
            }
            
            if (
                opcaoEscolhida == 1 ||
                opcaoEscolhida == 2 ||
                opcaoEscolhida == 3 ||
                opcaoEscolhida == 4
            ) {
                livrosListagem.mostrarTela(this.livrosFiltrados);
                this.opcaoValida = livrosListagem.opcaoValida
                livrosOpcoes.mostrarTela(this.livrosFiltrados);

                if (livrosOpcoes.voltarMenuPrincipal || limparCarrinho.voltarMenuPrincipal) {
                    this.opcaoValida = true;
                }
            }
        }
    }
}

module.exports = livrosConsulta;