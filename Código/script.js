// * MAP = Percorrer um Array

// let lista = ['Matheus', 'José', 'Maria', 'Lucas']

// lista.map((item, index) => {
//     console.log(`PASSANDO: ${item}, posição ${index}`)
// })

// * REDUCE = O reduce busca reduzir um Array

let numeros = [5, 3, 2];

let total = numeros.reduce((acumulador, numero, indice, original) => {
    console.log(`${acumulador} - total até o momento`);
    console.log(`${numero} - valor atual`);
    console.log(`${indice} - posição no array`);
    console.log(`${original} - array original`);
    console.log("======================================");

    return (acumulador += numero);
});

console.log("Total do Reduce: " + total);
