//Requerimento da função prompt
const prompt = require("prompt-sync")();

//Mensagem de boas vindas
console.log(`\n==================================================================\n`);
console.log(`                Seja bem vindo à Aquela Biblioteca`);
console.log(`\n==================================================================\n`);

//Login
let usuario = prompt(`Digite seu nome de usuário: `).toLowerCase().trim();
let senha = prompt(`Digite sua senha: `);

//Se o usuário for um desses pilantras, o programa avisará que há dévitos a pagar
if (usuario === `daniel` || usuario === `matheus` || usuario === `sillas`) {
  console.log(`\n==================================================================\n`);
  console.log(`              Você possui debitos com a biblioteca!`);
}

//Menu Principal
console.log(`\n==================================================================\n`);
console.log(`              Selecione o serviço que você deseja:\n`);
console.log(` 1 → Emprestimo de Livro(s)`);
console.log(` 2 → Devolução de Livro(s)`);
console.log(` 3 → Quitação de Débito(s)`);
console.log(` 4 → Informações`);
console.log(` 5 → Fechar o programa \n`);

//Seleção do menu principal
while (true) {
  let menuPrincipal = parseInt(prompt(` → `));
  console.log(`\n==================================================================\n`
);

  //Se a opção selecionada não for válida (digitar um número que não seja 1, 2, 3, 4 ou 5) o programa avisará com um erro e voltará a pedir ao usuário a opção que ele deseja selecionar
  if (!isNaN(menuPrincipal) && menuPrincipal > 0 && menuPrincipal < 6) {
    switch (menuPrincipal) {
      case 1:
        console.log(`                      EMPRESTIMO DE LIVRO(S)\n`);
        //
        //
        // FUNCIONALIDADE DE EMPRESTIMO AQUI
        //
        //
        break;
      case 2:
        console.log(`                      DEVOLUÇÃO DE LIVRO(S)\n`);
        //
        //
        // FUNCIONALIDADE DE DEVOLUÇÃO AQUI
        //
        //
        break;
      case 3:
        console.log(`                      QUITAÇÃO DE DÉBITOS\n`);
        //
        //
        // FUNCIONALIDADE DE PAGAMENTOS AQUI
        //
        //
        break;
      case 4:
        console.log(`                      INFORMAÇÕES\n`);
        //
        //
        // FUNCIONALIDADE DE INFORMAÇÕES AQUI
        //
        //
        break;
      default:
        console.log(`Fechando o programa...`);
        process.exit(1);
    }
    break;
  } else {
    console.log(`ERRO: Selecione uma opção válida!\n`);
  }
}
