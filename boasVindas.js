//Importações

const divisoria = require('./elementosGraficos/divisoria');
//Mensagem de Boas Vindas
const boasVindas = { 

    mostrarTela: function() {
        divisoria()
        console.log('              Seja bem vindo à Aquela Biblioteca');
        divisoria()
    }
}
//Exportações
module.exports = boasVindas;