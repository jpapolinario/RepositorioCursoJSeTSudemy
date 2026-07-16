const numero = Number(prompt(`Digite um número`));
let numeroTitulo = document.getElementById('numero-titulo');
let texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = ``;
texto.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5}</p>`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;

/* 
document.getElementById pegar um elemento por id, o id é o entre aspas entre parentesis, para guardar na memória, nós colocamos em uma variável
numeroTitulo.innerHTML = numero; ta falando que a variavel vai aparecer na tela
Number(variavel); para transformar em número
inner significa interno

*/