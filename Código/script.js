// setInterval

function acao(){
    document.write("Executando!!! <br>")
}

// var timer = setInterval(acao, 1000)

// setTimeout(acao(), 3000)

setTimeout(() => {
    console.log("Executou Nosso Timeout!!!")
}, 3000)