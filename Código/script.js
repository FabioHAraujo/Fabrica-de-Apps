// Rest Operator

// function convidados(...nomes) {
//     console.log("SEJAM BEM VINDOS CONVIDADOS!")
//     console.log(nomes)
// }

// convidados("Fábio", "Rafael", "Felipe", "Ana", "Daniel", "Álvaro")

function sorteador(...numeros) {
    console.log(numeros);
    
    const numeroGerado = Math.round(Math.random() * numeros.length)
    console.log(numeroGerado)
    console.log("O Número Sorteado foi: "+ numeros[numeroGerado])
}

sorteador(1, 4, 8, 6, 154, 44, 57, 7, 3, 99, 47, 11);
