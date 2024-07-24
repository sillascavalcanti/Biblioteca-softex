const prompt = require("prompt-sync")();
const bancoLivros = require("../bancoDados/bancoLivros");
const divisoria = require("../elementosGraficos/divisoria");

const livrosBuscaPalavra = {

    livrosFiltrados: [],
    palavraChave: '',
    buscaEncontrada: false,

    mostrarTela: function(atributoPesquisado) {

        divisoria();
        console.log(`              Busca por ${atributoPesquisado}`);
        console.log(``);
        this.palavraChave = prompt(`Digite sua pesquisa: `)

        this.livrosFiltrados = bancoLivros.filter(livro => livro[atributoPesquisado].toLowerCase().includes(this.palavraChave.toLowerCase()));

        if (this.livrosFiltrados.length == 0) {
            console.log(`\nNão foram encontrados resultados para a busca "${this.palavraChave}". Tente novamente.\n`);
            prompt(`Tecle ENTER para voltar... `)
        } else {
            this.buscaEncontrada = true;
        }
    }
}

module.exports = livrosBuscaPalavra;