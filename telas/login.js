//Importações
const prompt = require("prompt-sync")();
const chalk = require("chalk");
const bancoUsuarios = require("../bancoDados/bancoUsuarios");
const divisoria = require("../elementosGraficos/divisoria");
const espacamento = require("../elementosGraficos/espacamento");

const login = {
  loginBemSucedido: false,
  contaLogada: null,

  mostrarTela: function () {
    while (this.loginBemSucedido == false) {
      var login = prompt(`Login: `);
      var senha = prompt(`Senha: `);

      divisoria();

      for (let usuario of bancoUsuarios) {
        if (usuario.login.toLowerCase() == login.toLowerCase() && usuario.senha == senha) {
          this.contaLogada = usuario;
          this.loginBemSucedido = true;

          console.log(chalk.rgb(0,255,0)(`Bem vindo, ${this.contaLogada.login}!`));
          this.checandoDebito(this.contaLogada)
          break;
        }
      }

      if (this.loginBemSucedido == false) {
        console.log(chalk.rgb(255,0,0)`Login ou senha incorretos. Tente novamente.`);
        espacamento();
      }
    }
  },

  checandoDebito: function() {
    if (this.contaLogada.debito > 0) {
        espacamento();
        return console.log(chalk.rgb(255,255,0)(`Você tem debito de R$ ${this.contaLogada.debito.toFixed(2)}, dirija-se ao balcão.`));
      }
    espacamento();
    return console.log(`Você não tem pendencias.`);
  },
};

//Exportação
module.exports = login;
