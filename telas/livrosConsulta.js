const prompt = require("prompt-sync")();
const listaLivros = require("../bancoDados/bancoLivros");
const divisoria = require("../elementosGraficos/divisoria");
const livrosGeneros = require("./livrosGeneros");
const generos = require("./livrosGeneros");
const livros = require("./livrosListagem");
const menuPrincipal = require("./menuPrincipal");

const livrosConsulta = {

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
                    livrosFiltrados = listaLivros;

                    divisoria();
                    console.log(`Listando todos os livros... \n`);
                    livros.mostrarTela(livrosFiltrados);
                break;

                case 2:
                    opcaoValida = true;
                    generos.mostrarTela();

                    divisoria();
                    console.log(`Listando todos os livros do gênero ${livrosGeneros.generoEscolhido}... \n`);
                    livros.mostrarTela(generos.livrosFiltrados);
                break;

                case 3:
                    console.log(`boo`);
                    opcaoValida = true;
                break;

                case 4:
                    console.log(`boo`);
                    opcaoValida = true;
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