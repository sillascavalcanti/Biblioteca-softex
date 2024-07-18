const prompt = require("prompt-sync")({sigint:true});
const listaLivros = require("../bancoDados/bancoLivros");
const divisoria = require("../elementosGraficos/divisoria")

const listaDeLivros = listaLivros

const carrinho = {
    mostrarTela: function() {
        let carrinho = [];

        while (true) {
            
            console.log(`              Meu Carrinho`);
            console.log(` 1 → Adicionar Livro(s)`);
            console.log(` 2 → Remoção de Livro(s)`);
            console.log(` 3 → Visualizar Livro(s)`);
            console.log(` 0 → Sair`);
            divisoria();
            let acao = prompt("O que você deseja fazer?");
            
            switch (acao) {
                case "1":
                    if(carrinho.length<3){
                        adicionarLivro()
                        break;
                    }
                    divisoria()
                    console.log("Seu carrinho esta cheio!")
                    divisoria()
                    break;
                case "2":
                    removerLivro()
                    break;
                case "3":
                    visualizarCarrinho()
                    break;
                case "0":
                    console.log("Saindo do programa...");
                    break;
                default:
                    console.log("Ação inválida. Por favor, escolha adicionar, remover, visualizar ou sair.");
                    break;
            }
        }


        function adicionarLivro() {
            // let escolha = prompt("Digite o número do livro que você deseja adicionar ao carrinho (ou 0 para sair):");
        
            while(carrinho.length < 3) {
                escolha = prompt("Digite o número de outro livro que você deseja adicionar ao carrinho (ou 0 para sair):");
                escolha = parseInt(escolha);
                if (isNaN(escolha) || escolha < 1 || escolha > listaDeLivros.length) {
                    console.log("Escolha inválida. Tente novamente.");
                } else {
                    carrinho.push(listaDeLivros[escolha - 1]);
                    console.log(`Livro "${listaDeLivros[escolha - 1].titulo}" adicionado ao carrinho.`);
                }
            }


        }
        
        function removerLivro() {

            console.log(`              Meu Carrinho`);
            console.log(` 1 → ${carrinho[0].titulo}`);
            console.log(` 2 → ${carrinho[1].titulo}`);
            console.log(` 3 → ${carrinho[2].titulo}`);

            let remover = prompt("Qual livro você deseja remover?");

            if (remover === "1" || remover === "2" || remover === "3") {
                let indice = carrinho[remover - 1].titulo;
                carrinho.splice(indice, 1);
                console.log(`Livro "${indice}" removido do carrinho.`);
                
            } else {
                console.log(`Opção não encontrado no carrinho.`);
            }
        }
        
        function visualizarCarrinho() {
            console.log("Livros no carrinho:");
            carrinho.forEach(livro => {
                console.log(`- "${livro.titulo}" de ${livro.autor}`);
            });
        }
        
    }
    
}

module.exports = carrinho;