function meuEscopo () {
    const forms = document.querySelector('.FORM');
    const inputPeso = document.querySelector('#peso');
    const inputAltura = forms.querySelector('#altura');
    const resultado = document.querySelector('#resultado');

    forms.addEventListener('submit', function (evento) {
        evento.preventDefault();

        const PESO = Number(inputPeso.value); 
        const ALTURA = Number(inputAltura.value); 

        if (!inputPeso.value || isNaN(PESO) || PESO <= 0) {
            resultado.innerHTML = `Peso Inválido! Digite apenas números maiores que zero.`;
            resultado.style.background = `red`;
            return
        }
        if (!inputAltura.value || isNaN(ALTURA) || ALTURA <= 0) {
            resultado.innerHTML = `Altura Inválida! Digite apenas números maiores que zero.`;
            resultado.style.background = `red`;
            return
        }

        const IMC = PESO / ALTURA ** 2;

        if (IMC < 18.5) {
            mensagem = `Seu IMC é: ${IMC.toFixed(2)} (Abaixo do Peso).`;
        } else if (IMC >= 18.5 && IMC < 24.9) {
            mensagem = `Seu IMC é: ${IMC.toFixed(2)} (Peso normal).`;
        } else if (IMC >= 25 && IMC < 29.9) {
            mensagem = `Seu IMC é: ${IMC.toFixed(2)} (Sobrepeso).`;
        } else if (IMC >= 30 && IMC < 34.9) {
            mensagem = `Seu IMC é: ${IMC.toFixed(2)} (Obesidade Grau 1).`;
        } else if (IMC >= 35 && IMC < 39.9) {
            mensagem = `Seu IMC é: ${IMC.toFixed(2)} (Obesidade Grau 2).`;
        } else if (IMC >= 40) {
            mensagem = `Seu IMC é: ${IMC.toFixed(2)} (Obesidade Grau 3).`;
        }
        resultado.innerHTML = mensagem;
        resultado.style.background = `#00ffc4`;
    }) 
}
meuEscopo()