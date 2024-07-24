const prompt = require("prompt-sync")();
const bancoLivros = require("../bancoDados/bancoLivros");
const divisoria = require("../elementosGraficos/divisoria");
const livrosBuscaPalavra = require("./livrosBuscaPalavra");
const livrosGeneros = require("./livrosGeneros");
const livrosListagem = require("./livrosListagem");
const livrosOpcoes = require("./livrosOpcoes");

const livrosConsulta = {

    livrosFiltrados: [],

    mostrarTela: function() {

        var opcaoValida = false;
        var opcaoEscolhida;

        while (!opcaoValida) {

            divisoria();
            console.log(`              Consulta de livros`);
            console.log(``);
            console.log(`1 -> Listar todos os livros`);
            console.log(`2 -> Buscar por Gênero`);
            console.log(`3 -> Buscar por Autor`);
            console.log(`4 -> Buscar por Título`);
            console.log(`5 -> Pedir uma sugestão`);
            console.log(``);
            
            opcaoEscolhida = Number(prompt(`Digite a opção de busca desejada: `))

            switch (opcaoEscolhida) {
                case 1:
                    opcaoValida = true;
                    this.livrosFiltrados = bancoLivros;

                    divisoria();
                    console.log(`Listando todos os livros do acervo: \n`);

                break;

                case 2:
                    opcaoValida = true;
                    livrosGeneros.mostrarTela();
                    this.livrosFiltrados = livrosGeneros.livrosFiltrados;

                    divisoria();
                    console.log(`Listando todos os livros do gênero: ${livrosGeneros.generoEscolhido}\n`);

                break;

                case 3:
                    livrosBuscaPalavra.mostrarTela('autor');
                    this.livrosFiltrados = livrosBuscaPalavra.livrosFiltrados;

                    if (livrosBuscaPalavra.buscaEncontrada) {
                        
                        divisoria();
                        console.log(`Listando todos os livros com autor: "${livrosBuscaPalavra.palavraChave}"\n`);

                    }
                break;

                case 4:
                    livrosBuscaPalavra.mostrarTela('titulo');
                    this.livrosFiltrados = livrosBuscaPalavra.livrosFiltrados;

                    if (livrosBuscaPalavra.buscaEncontrada) {
                        divisoria();
                        console.log(`Listando todos os livros com titulo: "${livrosBuscaPalavra.palavraChave}"\n`);

                    }
                break;

                case 5:
                    opcaoValida = true;

                    divisoria();
                    console.log(`              Sugestão de leitura \n`);
                    console.log(`Para receber uma sugestão, por favor, consulte o bibliotecário de plantão. \n`);
                break;
            
                default:
                    console.log(``);
                    console.log(`Opção inválida. Por favor, tente novamente.`);
                    prompt(`Tecle ENTER para voltar... `)
                    console.log(``);

                break;
            }   
        };

        if (
            opcaoEscolhida == 1 ||
            opcaoEscolhida == 2 ||
            opcaoEscolhida == 3 ||
            opcaoEscolhida == 4
        ) {
            livrosListagem.mostrarTela(this.livrosFiltrados);
            this.opcaoValida = livrosListagem.opcaoValida;
            livrosOpcoes.mostrarTela(this.livrosFiltrados);

            if (livrosOpcoes.voltarMenuPrincipal) {
                this.opcaoValida = true;
            }
        }
    }
}

module.exports = livrosConsulta;