// * Funções Anônimas

/*
() => {}

1 - Os parênteses, onde a função recebe os parâmetros, assim como normalmente acontece em funções comuns
2 - "seta" => - Causa do nome Arrow Functions, serve para "apontar" que se trata de uma função anônima e ocorre antes do bloco.
3 - As chaves, que compoem o bloco

*/

function somar(a, b) {
    let total = a+b
    return total
}

console.log("Resultado da soma: "+somar(30,10))

function subtrair(a, b) {
    let total = a-b
    return total
}

console.log("Resultado da subtração: "+subtrair(30,10))


let numeros = [1,3,5,10]

numeros.map((item) => {
    console.log(item)
})