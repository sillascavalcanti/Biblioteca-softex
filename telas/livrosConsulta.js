const prompt = require("prompt-sync")();
const bancoLivros = require("../bancoDados/bancoLivros");
const divisoria = require("../elementosGraficos/divisoria");
const livrosBuscaPalavra = require("./livrosBuscaPalavra");
const livrosGeneros = require("./livrosGeneros");
const livrosListagem = require("./livrosListagem");
const menuPrincipal = require("./menuPrincipal");

const livrosConsulta = {

    livrosFiltrados: [],

    mostrarTela: function() {

        var opcaoValida = false;

        do {

            divisoria();
            console.log(`              Consulta de livros`);
            console.log(``);
            console.log(`1 -> Listar todos os livros`);
            console.log(`2 -> Buscar por Gênero`);
            console.log(`3 -> Buscar por Autor`);
            console.log(`4 -> Buscar por Título`);
            console.log(`5 -> Pedir uma sugestão`);
            console.log(``);
            
            menuPrincipal.opcaoEscolhida = Number(prompt(`Digite a opção de busca desejada: `))

            switch (menuPrincipal.opcaoEscolhida) {
                case 1:
                    opcaoValida = true;
                    this.livrosFiltrados = bancoLivros;

                    divisoria();
                    console.log(`Listando todos os livros do acervo: \n`);
                    livrosListagem.mostrarTela(this.livrosFiltrados);
                break;

                case 2:
                    opcaoValida = true;
                    livrosGeneros.mostrarTela();
                    this.livrosFiltrados = livrosGeneros.livrosFiltrados;

                    divisoria();
                    console.log(`Listando todos os livros do gênero: ${livrosGeneros.generoEscolhido}\n`);
                    livrosListagem.mostrarTela(this.livrosFiltrados);
                break;

                case 3:
                    livrosBuscaPalavra.mostrarTela('autor');
                    this.livrosFiltrados = livrosBuscaPalavra.livrosFiltrados;

                    if (this.livrosFiltrados.length == 0) {
                        console.log(`\nNão foram encontrados resultados para busca digitada. Tente novamente.\n`);
                        prompt(`Tecle ENTER para voltar... `)
                    } else{
                        divisoria();
                        console.log(`Listando todos os livros com autor: "${livrosBuscaPalavra.palavraChave}"\n`);
                        livrosListagem.mostrarTela(this.livrosFiltrados);
                        opcaoValida = true;
                    }
                break;

                case 4:
                    livrosBuscaPalavra.mostrarTela('titulo');
                    this.livrosFiltrados = livrosBuscaPalavra.livrosFiltrados;

                    if (this.livrosFiltrados.length == 0) {
                        console.log(`\nNão foram encontrados resultados para busca digitada. Tente novamente.\n`);
                        prompt(`Tecle ENTER para voltar... `)
                    } else{
                        divisoria();
                        console.log(`Listando todos os livros com titulo: "${livrosBuscaPalavra.palavraChave}"\n`);
                        livrosListagem.mostrarTela(this.livrosFiltrados);
                        opcaoValida = true;
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
                    prompt(`Tecle ENTER para continuar...`)
                    console.log(``);

                break;
            }   
        } while (!opcaoValida);
    }
}

livrosConsulta.mostrarTela()

module.exports = livrosConsulta;