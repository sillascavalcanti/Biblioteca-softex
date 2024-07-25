const prompt = require("prompt-sync")();
const divisoria = require("../elementosGraficos/divisoria");
const espacamento = require("../elementosGraficos/espacamento");

const informacoes = {
    mostrarTela: function() {

        divisoria();
        console.log('INFORMAÇÕES:');
        espacamento();//serve para espaçamento de linhas
        console.log('Endereço:');
        console.log('Rua Adelino Frutuoso, 404, Cordeiro, Recife-PE');
        console.log('CEP: 50721-200');
        espacamento();//serve para espaçamento de linha
        console.log('Horário de funcionamento:');
        console.log('Seg à Sex: 9h às 18h');
        console.log('Sábados e Domingos: 9h às 15h');
        espacamento();//serve para espaçamento de linhas
        console.log('Prazo de devolução de livros:');
        console.log('7 dias');
        espacamento();//serve para espaçamento de linhas
        console.log('Taxa em caso de atraso:');
        console.log('R$ 5,00 por dia');
        espacamento();//serve para espaçamento de linhas
        console.log('Atendimento ao cliente:');
        console.log('Telefone:(81) 3456-7890/3269-7890');
        console.log('E-mail: contato@aquelabiblioteca.org');
        espacamento();//serve para espaçamento de linhas
        prompt('Tecle ENTER para continuar... ');
    }
}

module.exports = informacoes;