// * FIND

// let listagem = [5, 3, "Jose", 2, "Fábio", "Jose"];

// let busca = listagem.find((item) => {
//     //CONDIÇÃO:
//     if(item === "Jose"){
//         return console.log("ITEM ENCONTRADO COM SUCESSO")
//     }
// });

// console.log(busca)

// * FILTER

let palavras = ["cachorro", "gato", "computador", "telefone", "janela", "mesa", "cadeira", "livro", "caneta", "teclado", "monitor", "banana"];

let resultado = palavras.filter((item) => {
    return item.length <= 4
})

console.log(resultado)