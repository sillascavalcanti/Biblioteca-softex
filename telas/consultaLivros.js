const prompt = require("prompt-sync")();
const listaLivros = require("../bancoDados/bancoLivros");
const bancoUsuarios = require("../bancoDados/bancoUsuarios");
const divisoria = require("../elementosGraficos/divisoria");
const livros = require("./livros");
const menuPrincipal = require("./menuPrincipal");

const consultaLivros = {
    
    mostrarTela: function() {

        var livrosFiltrados = []
        var opcaoValida = false;

        do {

            divisoria();
            console.log(`              Consulta de livros`);
            console.log(``);
            console.log(`1 -> Listar todos os livros`);
            console.log(`2 -> Buscar por Categoria`);
            console.log(`3 -> Buscar por Autor`);
            console.log(`4 -> Buscar por Título`);
            console.log(`5 -> Pedir uma sugestão`);
            console.log(``);
            
            menuPrincipal.opcaoEscolhida = Number(prompt(`Digite a opção de busca desejada: `))

            switch (menuPrincipal.opcaoEscolhida) {
                case 1:
                    divisoria();
                    console.log(`Listando todos os livros... \n`);
                    livros.mostrarTela(listaLivros);
                    opcaoValida = true;
                break;

                case 2:
                    console.log(`boo`);
                    opcaoValida = true;
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
                    console.log(``);
                    console.log(`Para receber uma sugestão de livro, por favor, consulte o bibliotecário de plantão.`);
                    console.log(``);
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

consultaLivros.mostrarTela()

module.exports = consultaLivros;