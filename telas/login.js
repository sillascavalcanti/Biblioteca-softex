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
        if (usuario.login.toLowerCase() == login.toLowerCase() && usuario.senha == senha) {
          this.contaLogada = usuario;
          this.loginBemSucedido = true;

          console.log(`Bem vindo, ${this.contaLogada.login}!`);
          checandoDebito(this.contaLogada)
          divisoria();
          break;
        }
      }

      if (this.loginBemSucedido == false) {
        console.log(`Login ou senha incorretos. Tente novamente.`);
        divisoria();
      }
    }
    function checandoDebito(contaLogada){
    if (contaLogada.debito > 0) {
        console.log("")
        return console.log(`Você tem debito de R$${contaLogada.debito}, Dirija-se ao balcão.`);
      }
    console.log("")
    return console.log(`Você não tem pendencias.`);
  }
  },
};

//Exportação
module.exports = login;
