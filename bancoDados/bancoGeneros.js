const bancoLivros = require("./bancoLivros");

const bancoGeneros = {

    lista: [],

    populaLista: function () {

        var generosSet = new Set();
        var generosLista = [];

        for (const livro of bancoLivros) {
                
            generosSet.add(livro.genero)
        }

        generosLista = Array.from(generosSet)
        this.lista = generosLista.sort((a, b) => a.localeCompare(b));
    }
}

bancoGeneros.populaLista()

module.exports = bancoGeneros;