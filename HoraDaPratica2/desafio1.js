//Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

let diaInput = prompt("Digite o dia da semana");
diaInput = diaInput.toLocaleLowerCase()
if (diaInput == "sábado" || diaInput == "sabado" || diaInput == "domingo") {
    console.log("Bom fim de semana!");
    alert("Bom fim de semana!");
    } else {
        console.log("Boa semana!")
        alert("Boa semana!");
    }