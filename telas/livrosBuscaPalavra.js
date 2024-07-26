const prompt = require("prompt-sync")();
const chalk = require("chalk");
const bancoLivros = require("../bancoDados/bancoLivros");
const espacamento = require("../elementosGraficos/espacamento");

const livrosBuscaPalavra = {

    livrosFiltrados: [],
    palavraChave: '',
    buscaEncontrada: false,

    mostrarTela: function(atributoPesquisado) {

        console.log(`              Busca por ${atributoPesquisado}`);
        espacamento();
        this.palavraChave = prompt(chalk.rgb(255,0,255)`Escreva sua pesquisa: `)

        this.livrosFiltrados = bancoLivros.filter(livro => livro[atributoPesquisado].toLowerCase().includes(this.palavraChave.toLowerCase()));

        if (this.livrosFiltrados.length == 0) {
            console.log(chalk.rgb(255,0,0)(`\nNão foram encontrados resultados para a busca "${this.palavraChave}". Tente novamente.\n`));
            prompt(`Tecle ENTER para voltar... `)
        } else {
            this.buscaEncontrada = true;
        }
    }
}

module.exports = livrosBuscaPalavra;