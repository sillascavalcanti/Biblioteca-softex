const listaLivros = require("../bancoDados/bancoLivros");
const divisoria = require("../elementosGraficos/divisoria");

const livros = {

    listaOrdemAlfabetica: [],

    mostrarTela: function(livros) {

        var contador = 1;
        this.listaOrdemAlfabetica = livros.sort((a, b) => a.titulo.localeCompare(b.titulo));

        for (const livro of this.listaOrdemAlfabetica) {
            
            console.log(`${contador} → ${livro.titulo} - ${livro.autor} - ${livro.genero}`);
            contador++;
        }

        console.log(``);
    }
}

module.exports = livros;