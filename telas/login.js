//Importações
const prompt = require("prompt-sync")();
const bancoUsuarios = require("../bancoDados/bancoUsuarios");
const divisoria = require("../elementosGraficos/divisoria");

const login = {
  loginBemSucedido: false,
  contaLogada: null,

  mostrarTela: function () {
    while (this.loginBemSucedido == false) {
      var login = prompt(`Login: `);
      var senha = prompt(`Senha: `);
      divisoria();

      for (let usuario of bancoUsuarios) {
        if (usuario.login == login && usuario.senha == senha) {
          this.contaLogada = usuario;
          this.loginBemSucedido = true;

          console.log(`Bem vindo, ${this.contaLogada.login}!`);
          divisoria();
          break;
        }
      }

      if (this.loginBemSucedido == false) {
        console.log(`Login ou senha incorretos. Tente novamente.`);
        divisoria();
      }
    }
  },
};

//Exportação
module.exports = login;
