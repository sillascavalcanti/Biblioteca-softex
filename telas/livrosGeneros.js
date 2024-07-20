const prompt = require("prompt-sync")();
const bancoLivros = require("../bancoDados/bancoLivros");
const divisoria = require("../elementosGraficos/divisoria");
const menuPrincipal = require("./menuPrincipal");

const livrosGeneros = {

    listaOrdemAlfabetica: [],
    livrosFiltrados: [],
    generoEscolhido: '',

    mostrarTela: function() {
        
        // Cria uma lista de gêneros, sem repetições, e ordena em ordem alfabética

        var generosSet = new Set();
        var generosLista = [];
        var opcaoValida = false;

        for (const livro of bancoLivros) {
                
            generosSet.add(livro.genero)
        }

        generosLista = Array.from(generosSet)
        this.listaOrdemAlfabetica = generosLista.sort((a, b) => a.localeCompare(b));

        // Contrói a tela onde o usuário poderá escolher o gênero

        do {

            var contador = 1;

            divisoria();
            console.log(`              Gêneros`);
            console.log(``);
            
            for (const genero of this.listaOrdemAlfabetica) {

                console.log(`${contador} → ${genero}`);
                contador++;
            }
            console.log(``);
            
            menuPrincipal.opcaoEscolhida = Number(prompt(`Digite o gênero desejado: `))

            if (menuPrincipal.opcaoEscolhida >= 1 && menuPrincipal.opcaoEscolhida < this.listaOrdemAlfabetica.length+1) {

                opcaoValida = true;

                this.generoEscolhido = this.listaOrdemAlfabetica[menuPrincipal.opcaoEscolhida-1];

                this.livrosFiltrados = bancoLivros.filter(livro => livro.genero === this.generoEscolhido)

            } else {
                console.log(``);
                console.log(`Opção inválida. Por favor, tente novamente.`);
                prompt(`Tecle ENTER para continuar...`)
                console.log(``);
            }

        } while (!opcaoValida);
    }
}

module.exports = livrosGeneros;