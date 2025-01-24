//Aline está dando seus primeiros passos na programação utilizando o JavaScript e recentemente descobriu uma funcionalidade que achou fascinante: o operador ternário.
// Ela achou muito interessante a possibilidade que o operador traz para diminuir a quantidade de código escrito em algumas ocasiões
// e decidiu aplicar na prática, em um de seus projetos pessoais. 
// No entanto, ao tentar fazer essa refatoração, acabou se esquecendo da sintaxe do operador ternário.
// Sabendo que você estudou sobre o operador recentemente, ela pediu sua ajuda e mostrou o código que pretende refatorar:

//como ela fez

// let palavraPessoa = "";

//1 if(quantidadePessoas == 1){
//2     palavraPessoa = "pessoa";
//3 }else{
//4     palavraPessoa = "pessoas"
//5 }
//como eu fiz 
let palavraPessoa = quantidadePessoas > 1 ? 'pessoas' : 'pessoa';
