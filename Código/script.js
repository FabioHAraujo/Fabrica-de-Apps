

// Spread Operator

/*
let primeiros = [1,2,3]

let outros = [primeiros, 7,8,10]
console.log(outros) //Imprime um array que tem 1 array na 0 e o restante dos numeros já definidos.

outros = [...primeiros,7,8,10]
console.log(outros) //Imprime um array que tem os números do primeiro array e o restante dos numeros já definidos.
*/

/*
let pessoa = {
    nome: "Carlos",
    sobrenome: "Strassburger",
    idade: 58,
    cargo: "RH"
}

let novaPessoa = {
    ...pessoa,
    status: "ATIVO",
    cidade: "Campo Grande / MS",
    telefone: "67999884422"
}

console.log(novaPessoa)
*/

function novoUsuario(info) {
    let dados = {
        ...info,
        status: "ATIVO",
        inicio: "20/03/2012",
        codigo: "141592"
    }

    console.log(dados)
}

novoUsuario({nome: "José", sobrenome: "Silva", cargo: "DEV"})