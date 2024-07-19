const prompt = require("prompt-sync")();
const listaLivros = require("../bancoDados/bancoLivros");
const divisoria = require("../elementosGraficos/divisoria");
const consultaLivros = require("./livrosConsulta");
const menuPrincipal = require("./menuPrincipal");

const livrosGeneros = {

    listaOrdemAlfabetica: [],
    generoEscolhido: '',
    livrosFiltrados: [],

    mostrarTela: function() {
        
        // Cria uma lista de gêneros, sem repetições, e ordena em ordem alfabética

        var generosSet = new Set();
        var generosLista = [];
        var opcaoValida = false;

        for (const livro of listaLivros) {
                
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
                
                this.livrosFiltrados = listaLivros.filter(livro => livro.genero === this.generoEscolhido)

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