alert('Seja bem vindo ao jogo do número secreto');
let numeroMaximo = 500;
let numeroSecreto = parseInt(Math.random()* numeroMaximo + 1) 

// gera um numero pseudo aleatorio de 1 a 10 (math.random gera um numero de 0 a 0.99, depois, 
// ao multiplicar por 10, o numero é passado para inteiro, ex: 1.2434343... e o parseint transforma em inteiro)

console.log('numero secreto: ', numeroSecreto);
let chute;
let tentativas = 0;


//enquanto o chute nao for igual ao numero secreto
while(chute != numeroSecreto) {
    chute = prompt(`Digite um número de 1 a ${numeroMaximo}`);    
    if (numeroSecreto == chute) {
        tentativas++
        break;
        
    } else {
        if (numeroSecreto > chute) {
            tentativas++
            alert(`O número secreto é maior que ${chute} você ja tentou ${tentativas} vezes`);
    } else {
        tentativas++
        alert(`O número secreto é menor que ${chute} você ja tentou ${tentativas} vezes`);
    }
    }
}
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Parabéns, você acertou o número secreto: ${numeroSecreto}, você descobriu o numero secreto com ${tentativas} ${palavraTentativa}`);

