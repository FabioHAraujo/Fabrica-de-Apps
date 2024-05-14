

//

let pessoa = {
    nome: "Paulo",
    sobrenome: "Pedroso",
    empresa: "Grupo Fintech",
    cargo: "Programador Back-end"
};

// console.log(pessoa.nome)

// const { nome:nomePessoa, sobrenome, empresa, cargo  } = pessoa

// console.log(nomePessoa)
// console.log(sobrenome)
// console.log(empresa)
// console.log(cargo)

let nomes = ['Matheus', 'Fábio', 'Pedro']

let {0:nome} = nomes

/*
    *Colocar 0:nome ou 0:qualquerCoisa só serve para renomear o atributo que se está sendo puxado, para fins de praticidade.
    *Exemplo: Tendo um array de paradas de ônibus :
    * let paradasDeOnibus = ["Centro", "Avenida Paulista", "Terminal Rodoviário", "Shopping Center", "Universidade"];
    * Poderia ser tudo renomeado usando a função dos ':'
    ? Exemplo: {0: centro} = paradasDeOnibus (dessa forma, seguimos chamando de centro, e não de 0)
    ! Este recurso respeita as posições num array. Exemplo:
    * lanches = ["Pastel", "Coxinha", "Ovo"]
    * let [assado, frito, cozido] = lanches
    * Dando um console log:
    * console.log(assado) = imprime Pastel
    * console.log(frito) = imprime Coxinha
    * console.log(cozido) = imprime Ovo

*/

console.log(nome)