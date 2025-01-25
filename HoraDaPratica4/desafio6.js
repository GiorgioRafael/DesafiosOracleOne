//Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha.
//  Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado".
//   Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.

let valor1 = 10;

let valor2 = 15;

let diferenca = valor1 - valor2;
let diferencaFormatada = Math.abs(diferenca) // a diferenca estava dando negativa então pesquisei uma função que retorna o valor absolutoa

console.log(`A diferença entre o ${valor1} e ${valor2} é igual a ${diferencaFormatada}.`)
