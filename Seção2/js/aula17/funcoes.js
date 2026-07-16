const raiz = function (n) {
    n ** 0.5;
}
console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));

// function soma(x = 0, y = 0) {
//     const resultado = x + y;
//     return resultado;
// }
// const resultado = soma(4, 2);
// console.log(resultado);
/*
Para executar uma função, chamar ela, você precisa colocar os parentesis()
Para criar uma função:
function nome (parametros se tiver) {
    ...
}
o console.log() na função só vai aparecer se a função for chamada diretamente, mas se voce quer atribuir um valor da funçao para uma variavel, é só colocar um return, para retornar o valor que voce deseja na variavel, e com o return o valor nao vai direto no terminal precisa ser atribuido em uma variavel
Uma variavel criada dentro de uma função é "protegida"
return encerra a função na linha dela
tem como colocar um valor pré existente nos parametros usando =, x = 0
=> arroy function para quando ter somente uma linha
nao precisa do nome function, nao precisa de nome, nao precisa de parentesis do parametro, precisa do parametro ainda, nao precisa de return
fica assim, exemplo:
const variavel = parametro => parametro ** 0.5;

*/