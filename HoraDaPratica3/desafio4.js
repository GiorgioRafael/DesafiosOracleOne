//Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.

let numeroInput = prompt("Bem vindo ao programa contador, digite um número maior que 0."); 
let contador = 0;
while (contador <= numeroInput){
    console.log("Numero: " + contador)
    contador++
}