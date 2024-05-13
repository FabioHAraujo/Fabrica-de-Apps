/*
    Abaixo de 17 - Subnutrição
    Entre 17 e 18,49 - Abaixo do peso
    Entre 18,5 e 24,99 - Peso Normal
    Entre 25 e 29,99 - Sobrepeso
    Entre 30 e 39,9 - Obesidade
    Acima de 40 - Obesidade Mórbida

    peso / (altura*altura)
*/

var peso
var altura
var imc
var resultado


function calcular(event){
    event.preventDefault()

    peso = document.getElementById('peso').value
    altura = document.getElementById('altura').value
    
    console.log(peso)
    console.log(altura)

    imc = peso / (altura*altura)

    resultado = document.getElementById('resultado')

    if(imc < 17) 
        resultado.innerHTML = "<br/>Você está com Subnutrição - IMC: " + (imc.toFixed(2))
    else if (imc >= 17 && imc <18.5) 
        resultado.innerHTML = "<br/>Você está Abaixo do Peso - IMC: " + (imc.toFixed(2))
    else if (imc >= 15.5 && imc < 25) 
        resultado.innerHTML = "<br/>Você está com Peso Normal - IMC: " + (imc.toFixed(2))
    else if (imc >= 25 && imc < 30)
        resultado.innerHTML = "<br/>Você está com Sobrepeso - IMC: " + (imc.toFixed(2))
    else if (imc >= 30 && imc < 40)
        resultado.innerHTML = "<br/>Você está com Obesidade - IMC: " + (imc.toFixed(2))
    else if (imc >= 40)
        resultado.innerHTML = "<br/>Você está com Obesidade Mórbida - IMC: " + (imc.toFixed(2))
    else{
        resultado.innerHTML = "Dados inseridos são inválidos\n" + 
        "Você inseriu o peso de : " + peso +
        "kg\n E a altura de " + altura + "m"
    }
    
    document.getElementById('peso').value = ''
    document.getElementById('altura').value = ''

}