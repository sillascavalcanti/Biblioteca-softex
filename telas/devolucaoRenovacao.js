{
const prompt = require('prompt-sync')();
console.log('Devolução / Renovação de empréstimos');
        console.log('');
        console.log('1 → Devolver livros');
        console.log('2 → Renovar empréstimos');
      var opcaoEscolhida = Number(prompt('Digite a opção desejada: '));

        switch (opcaoEscolhida) {
            case 1:
                console.log('Para devolver livros, dirija-se ao balcão de devolução.');
                process.exit()
            break;

            case 2:
                console.log('Para renovar empréstimos, dirija-se ao bibliotecário de plantão.');
                process.exit()
            break;
        
            default:
                console.log('Opção inválida! Tente novamente.');
                process.exit()
            break;
        }
    }

