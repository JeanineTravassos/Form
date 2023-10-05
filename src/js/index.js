const botao = document.querySelector('.submit');
const inputs = document.querySelectorAll('.input');
const spans = document.querySelectorAll('.span');

function validaInformacoes() {
    const inputsValue = inputs.values;

    if (inputsValue === '') {
        alertaErro();
    } else {
        confirmaPreenchimento();
    }
}

function alertaErro(){
    inputs.style.border = 'solid 1px #F52E2E';
    spans.style.color = '#F52E2E';
}

function confirmaPreenchimento(){
    inputs.style.border = 'solid 1px #00C22B';
    spans.style.color = '#fff';
}

botao.addEventListener('click', () => validaInformacoes());