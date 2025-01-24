//Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.

let numeroInput = prompt("Bem vindo ao programa de contagem regressiva, digite um número maior que 0.")

while (numeroInput >= 0){
    console.log("Numero: " + numeroInput)
    numeroInput--
}