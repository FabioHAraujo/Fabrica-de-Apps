var area = document.getElementById("area")

function entrar(){
    var nome = prompt("Digite seu nome")


    if (nome === null || nome === '') {
        alert("Você não inseriu um nome válido")
        area.innerHTML = "Clique no Botão para Acessar: "
    } else{
        area.innerHTML = "Bem-Vindo " + nome + " "

        let botaoSair = document.createElement("button")
        botaoSair.innerText = "Sair da conta"
        botaoSair.onclick = sair

        area.appendChild(botaoSair)
    }
}

function sair(){
    alert("Até mais!")
    area.innerHTML = "Clique no Botão para Acessar: "
}

function mediaAluno(nota1, nota2){
    var media = (nota1+nota2)/2
    if((nota1 || nota2)>10 || (nota1 || nota2)<0){
        console.log("NOTAS INVÁLIDAS INSERIDAS")
        return
    }

    if (media >= 7 && media <=10) {
        console.log("Aluno aprovado com a média: " + media)
    } else if (media <7 && media >=4) {
        console.log("Aluno em recuperação com a média: " + media)
    } else if (media >=0 && media <4) {
        console.log("Aluno reprovado com a média: " + media)
    } else {
        console.log("Erro identificado no cálculo da média.\nDEBUG: notas inseridas = " + nota1 + " e " + nota2)
    }
}

function aluno(nome, curso){
    var mensagem = "Bem vindo " + nome + " ao curso de " + curso
    
    console.log(mensagem)
}