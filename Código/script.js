// includes, startsWith, endsWith

// let nomes = ["Fábio", "Felipe", "Rafael"]

// console.log(nomes.includes("Fábio"))

// if(nomes.includes("Felipe")){
//     console.log("ESTÁ NA LISTA")
// } else {
//     console.log("NÃO ESTÁ NA LISTA")
// }

let nome = "Fábio"

console.log(nome.startsWith("Fáb"))
console.log(nome.startsWith("fáb")) // É case sensitive, por isso retorna falso

console.log(nome.endsWith("o"))
console.log(nome.endsWith("O")) // Novamente, case sensitive