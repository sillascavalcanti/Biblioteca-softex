const prompt = require("prompt-sync")({sigint:true});
const listaLivros = require("../bancoDados/bancoLivros");
const divisoria = require("../elementosGraficos/divisoria")
const limparCarrinho = require("../telas/limparCarrinho")

const listaDeLivros = listaLivros

const carrinho = {
    mostrarTela: function() {
        let carrinho = [];

        while (true) {

            console.log(`              Meu Carrinho`);
            visualizarCarrinho()
            divisoria()
            
            console.log(` 1 → Remover o primeiro Livro`);
            console.log(` 2 → Remover o segundo Livro`);
            console.log(` 3 → Remover o terceiro Livro`);
            console.log(` 8 → Adicionar mais um Livro`);
            console.log(` 9 → Finalizar Carrinho`);
            console.log(` 0 → Limpar Carrinho`);
            divisoria();
            let acao = prompt("O que você deseja fazer? ");

            switch (acao) {
                case "1":
                    if (indice === null) {
                        console.log(`Opção inválida`);
                    }
                    var remover = "1"
                    var indice = carrinho[remover - 1].titulo;
                    carrinho.splice(indice, 1);
                    console.log(`Livro "${indice}" removido do carrinho.`);
                    break;
                case "2":
                    if (indice === null) {
                        console.log(`Opção inválida`);
                    }
                    var remover = "2"
                    var indice = carrinho[remover - 1].titulo;
                    carrinho.splice(indice, 1);
                    console.log(`Livro "${indice}" removido do carrinho.`);
                    break;
                case "3":
                    if (indice === null) {
                        console.log(`Opção inválida`);
                    }
                    var remover = "3"
                    var indice = carrinho[remover - 1].titulo;
                    carrinho.splice(indice, 1);
                    console.log(`Livro "${indice}" removido do carrinho.`);
                    break;
                case "8":
                    if(carrinho.length<3){
                        adicionarLivro()
                        break;
                    } else {
                        divisoria()
                        console.log("Seu carrinho esta cheio!")
                        divisoria()
                        break;
                    }
                case "9":
                    console.log(`Fazendo checkout...`);
                    break;
                case "0":
                    console.log(`Limpando carrinho...`);
                    carrinho.pop();
                    limparCarrinho.mostrarTela();
                    break;
                default:
                    console.log("Ação inválida. Por favor, tente novamente!");
                    break;
            }
        }


        function adicionarLivro() {
            escolha = prompt("Digite o número de outro livro que você deseja adicionar ao carrinho (ou 0 para sair):");
            escolha = parseInt(escolha);
            if (isNaN(escolha) || escolha < 1 || escolha > listaDeLivros.length) {
                console.log("Escolha inválida. Tente novamente.");
            } else {
                carrinho.push(listaDeLivros[escolha - 1]);
                console.log(`Livro "${listaDeLivros[escolha - 1].titulo}" adicionado ao carrinho.`);
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