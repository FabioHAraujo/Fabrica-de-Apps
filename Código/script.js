
// Dev

let adicionados = []

function registra() {
    let conteudo = document.getElementById('tarefa').value
    if(adicionados.includes(conteudo)){
        alert(`Você já adicionou ${conteudo} anteriormente, não é possível adicionar 2 vezes`)
    } else {
        alert(`Você adicionou ${conteudo} à lista de tarefas`)

        let lista = document.getElementById('lista')
        let novoItem = document.createElement('li')
        let botaoExcluir = document.createElement('button')

        botaoExcluir.textContent = "Excluir"

        adicionados.push(conteudo)
        let identificador  = adicionados.length - 1

        novoItem.setAttribute('id', identificador)
        novoItem.textContent = conteudo
        botaoExcluir.setAttribute('onclick', 'excluir('+identificador+')')

        lista.appendChild(novoItem)
        novoItem.appendChild(botaoExcluir)
    }
}
function excluir(identificador){
    let lista = document.getElementById('lista')
    let deletado = document.getElementById(identificador)
    let texto = deletado.textContent
    texto = texto.slice(0,-7)
    alert(`Você removeu ${texto} da lista de tarefas`)
    lista.removeChild(deletado)
}