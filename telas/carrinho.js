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

function removerLivro() {
    let titulo = prompt("Qual livro você deseja remover?");
    let indice = carrinhoDeLivros.findIndex(livro => livro.titulo === titulo);
    if (indice !== -1) {
        let livroRemovido = carrinhoDeLivros.splice(indice, 1)[0];
        console.log(`Livro "${livroRemovido.titulo}" removido do carrinho.`);
    } else {
        console.log(`Livro "${titulo}" não encontrado no carrinho.`);
    }
}

function visualizarCarrinho() {
    console.log("Livros no carrinho:");
    carrinhoDeLivros.forEach(livro => {
        console.log(`- "${livro.titulo}" de ${livro.autor}`);
    });
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