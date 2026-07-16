const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,
    fala() {
        console.log(`A minha idade atual é ${this.idade}`);
    },
    incrementaIdade() {
        this.idade++;
    }
};
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();

// function criaPessoa (nome, sobrenome, idade) {
//     return { nome, sobrenome, idade };
// }
// const pessoa1 = criaPessoa('Luiz', 'Miranda', 25);
// const pessoa2 = criaPessoa('Maria', 'Oliveira', 35);
// const pessoa3 = criaPessoa('João', 'Moreira', 45);
// const pessoa4 = criaPessoa('Junior', 'Lara', 55);
// const pessoa5 = criaPessoa('Jean', 'Otávio', 65);
// console.log(pessoa1.nome)
/* 
para criar um objeto, voce cria a variavel, abre chaves {} e dentro deles voce vai colocando |chave: valor,| sem a virgula nao funciona
para voce saber o valor da chave que voce quer é só;
variavel.chave que ai aparece o valor
tem como criar uma função dentro do objeto, cria normalmente, só nao precisa usar a palavra function
this.chave se referencia a chave |desse| objeto que ele esta dentro

*/