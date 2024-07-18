const prompt=require("prompt-sync")({sigint:true}); 
let listaDeLivros = [
    { titulo: "Dom Casmurro", autor: "Machado de Assis" },
    { titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien" },
    { titulo: "1984", autor: "George Orwell" },
    { titulo: "A Revolução dos Bichos", autor: "George Orwell" },
    { titulo: "O Pequeno Príncipe", autor: "Antoine de Saint-Exupéry" }
];

let carrinho = [];


function adicionarLivro() {
    let escolha = prompt("Digite o número do livro que você deseja adicionar ao carrinho (ou 0 para sair):");

    while (escolha != 0) {
        escolha = parseInt(escolha);
        if (isNaN(escolha) || escolha < 1 || escolha > listaDeLivros.length) {
            console.log("Escolha inválida. Tente novamente.");
        } else {
            let livroEscolhido = listaDeLivros[escolha - 1];
            carrinho.push(livroEscolhido);
            console.log(`Livro "${livroEscolhido.titulo}" adicionado ao carrinho.`);
        }
        escolha = prompt("Digite o número de outro livro que você deseja adicionar ao carrinho (ou 0 para sair):");
    }
}

function removerLivro() {
    let titulo = prompt("Qual livro você deseja remover?");
    let indice = carrinho.findIndex(livro => livro.titulo === titulo);
    if (indice !== -1) {
        let livroRemovido = carrinho.splice(indice, 1)[0];
        console.log(`Livro "${livroRemovido.titulo}" removido do carrinho.`);
    } else {
        console.log(`Livro "${titulo}" não encontrado no carrinho.`);
    }
}

function visualizarCarrinho() {
    console.log("Livros no carrinho:");
    carrinho.forEach(livro => {
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