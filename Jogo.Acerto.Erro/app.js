alert('Seja bem vindo ao jogo do número secreto');
let numeroSecreto = 2;
console.log('numero secreto: ', numeroSecreto);
let tentativa = prompt('Digite um número de 1 a 10');

if (numeroSecreto == tentativa) {
    alert('Parabéns, você acertou o número secreto: ' + numeroSecreto);
} else {
    alert('você errou');

}