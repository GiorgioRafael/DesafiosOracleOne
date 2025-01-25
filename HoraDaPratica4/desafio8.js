//Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero.
//  Use if-else para imprimir a respectiva mensagem.

let numero = prompt('Insira um numero')
let msg;
if(numero == 0){
    msg = `O número é igual a zero. Numero digitado: ${numero}.`
} else if (numero < 0){
    msg = `O numero é negativo. Numero digitado: ${numero}.`
} else {
    msg = `O numero é positivo. Numero digitado: ${numero}.`
}

alert(msg)