//Desafio 1
// const alunos = ['João', 'Maria', 'Pedro'];
// alunos.push('Ana');
// alunos.shift();
// console.log(`A lista atual de alunos é: ${alunos}. O total de alunos é: ${alunos.length}`);

// //Desafio 2
// const numeros= [];
// numeros.push(Math.round(Math.random() * 10 + 10));
// numeros.push(Math.round(Math.random() * 10 + 20));
// numeros.push(Math.round(Math.random() * 10 + 30));
// numeros.unshift(50);
// const dobro = numeros[1] * 2;
// numeros[1] = dobro;
// console.log(numeros);

// const alunos = ['Luiz', 'Maria', 'João'];

// console.log(typeof alunos);
// console.log(alunos instanceof Array);

// alunos.push('Luiza');
// alunos.push('Eduardo');
// console.log(alunos.slice(0, -2));
// delete alunos[1];
// const removido = alunos.shift();
// console.log(removido);
// alunos.unshift('Luiza');
// alunos.unshift('Fábio');
// alunos.push('Luiza');
// alunos.push('Fábio');
// console.log(alunos.length) = 'Luiza';
// console.log(alunos.length) = 'Fábio';
// console.log(alunos.length) = 'Luana';
// alunos[0] = 'Eduardo';
// alunos[3] = 'Luiza';
// console.log(alunos[0]);
// console.log(alunos[2]);

/* 
Os índices da array seguemm os itens dentro dela
alunos = ['Luiz', 'Maria', 'João'], indice 0 = Luiz, indice 1 = Maria...
alunos[0] = 'Eduardo'; troquei o indice 0 para eduardo
alunos[3] = 'Luiza'; como nao tinha indicie 3, eu criei o indice 3
console.log(alunos.length) = 'Luiza'; tambem tem como adicionar dessa forma, colocando no fim da array
alunos.push('Luiza'); adiciona luiza no fim do array tambem, push significa empurrar
alunos.unshift('Luiza'); .unshift adiciona no começo
alunos.pop(); .pop remove do fim, pop significa estourar
const removido = alunos.pop();
console.log(removido); 
ta mostrando quem ele removeu
.shift remove do inicio
delete alunos[1]; dessa forma voce apaga o indice mas nao modifica o resto
console.log(alunos.slice(0, 2)); voce fatia o array e só quer ver do indice 0 ao 2, mas voce nao ve o 2, slice significa fatiar, console.log(alunos.slice(0, -2)); dessa forma ele começa da direita pra esquerda e elimina dois indices
console.log(alunos instanceof Array); para ter certeza de que voce esta trabalhando com array

*/