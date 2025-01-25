//Peça ao usuário para inserir sua idade com prompt. 
// Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.

let idade = prompt(`Insira sua idade`)
idade = Number(idade); //converte para numero
let msg = idade >= 18 ? `Você é maior de idade, ${idade}` : `Você é menor de idade, ${idade}. Para ser maior de idade vocë precisa ter 18 anos.`
alert(msg)