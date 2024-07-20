const prompt = require("prompt-sync")();
const bancoLivros = require("../bancoDados/bancoLivros");
const divisoria = require("../elementosGraficos/divisoria");

const livrosBuscaPalavra = {

    livrosFiltrados: [],
    palavraChave: '',

    mostrarTela: function(atributoPesquisado) {

        divisoria();
        console.log(`              Busca por ${atributoPesquisado}`);
        console.log(``);
        this.palavraChave = prompt(`Digite sua pesquisa: `)

        this.livrosFiltrados = bancoLivros.filter(livro => livro[atributoPesquisado].toLowerCase().includes(this.palavraChave.toLowerCase()));
    }
}

module.exports = livrosBuscaPalavra;