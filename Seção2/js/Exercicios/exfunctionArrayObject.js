function meuEscopo () {
    const forms = document.querySelector('.FORM');
    const resultado = document.querySelector('.RESULTADO');

    const pessoas = [];

    function recebeEventoForm (evento) {
        evento.preventDefault();

        const nome = forms.querySelector('.nome');
        const sobrenome = forms.querySelector('.sobrenome');
        const peso = forms.querySelector('.peso');
        const altura = forms.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });
        
        console.log(pessoas);

        resultado.innerHTML += `<p><br>${nome.value}, ${sobrenome.value}, ${peso.value}, ${altura. value}</p>`;
        
    }
    forms.addEventListener('submit', recebeEventoForm);
    
}
meuEscopo();

// vai criar um objeto e colocar esse objeto dentro desse array












//     forms.onsubmit = function (evento) {
//         evento.prevenDefault(); 
//         alert(1)
//         console.log('Foi enviado');
//     };
/* 
document.querySelector(); query significa consulta, para pegar as classes dentro das constas 

*/