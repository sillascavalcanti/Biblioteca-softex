const prompt = require("prompt-sync")();
const bancoGeneros = require("../bancoDados/bancoGeneros");
const bancoLivros = require("../bancoDados/bancoLivros");
const divisoria = require("../elementosGraficos/divisoria");
const espacamento = require("../elementosGraficos/espacamento");

const livrosGeneros = {

    listaOrdemAlfabetica: [],
    livrosFiltrados: [],
    generoEscolhido: '',

    mostrarTela: function() {
        
        this.listaOrdemAlfabetica = bancoGeneros.lista;
        
        do {

            var contador = 1;
            var opcaoEscolhida;

            console.log(`              Gêneros`);
            espacamento();
            
            for (const genero of this.listaOrdemAlfabetica) {

                console.log(`${contador} → ${genero}`);
                contador++;
            }
            espacamento();
            
            opcaoEscolhida = Number(prompt(`Digite o gênero desejado → `))
            espacamento();

            if (opcaoEscolhida >= 1 && opcaoEscolhida < this.listaOrdemAlfabetica.length+1) {

                opcaoValida = true;

                this.generoEscolhido = this.listaOrdemAlfabetica[opcaoEscolhida-1];

                this.livrosFiltrados = bancoLivros.filter(livro => livro.genero === this.generoEscolhido)

            } else {
                espacamento();
                console.log(`Opção inválida. Por favor, tente novamente.`);
                prompt(`Tecle ENTER para continuar...`)
                espacamento();
            }
        } while (!opcaoValida);
    }
}

module.exports = livrosGeneros;