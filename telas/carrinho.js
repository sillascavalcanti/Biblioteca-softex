const prompt=require("prompt-sync")({sigint:true}); 

let carrinhoDeLivros = [
    { titulo: "Dom Casmurro", autor: "Machado de Assis" },
    { titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien" }
];

function adicionarLivro() {
    let titulo = prompt("Qual livro você deseja adicionar?");
    let autor = prompt(`Autor de "${titulo}"?`);
    let novoLivro = { titulo: titulo, autor: autor };
    carrinhoDeLivros.push(novoLivro);
    console.log(`Livro "${titulo}" adicionado ao carrinho.`);
}
 
while (true) {
    let acao = prompt("O que você deseja fazer? (adicionar / remover / visualizar / sair)");

    if (acao === "adicionar") {
        adicionarLivro();
    } else if (acao === "remover") {
        removerLivro();
    } else if (acao === "visualizar") {
        visualizarCarrinho();
    } else if (acao === "sair") {
        console.log("Saindo do programa...");
        break;
    } else {
        console.log("Ação inválida. Por favor, escolha adicionar, remover, visualizar ou sair.");
    }
}