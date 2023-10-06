const botao = document.querySelector('.submit');
const inputs = document.querySelectorAll('.input');

function validaInformacoes() {
    let hasError = false;
    inputs.forEach(function (element) {
        if (element.value === '') {
            alertaErro(element);
            hasError = true;
        } else {
            confirmaPreenchimento(element);
        }
    });

    if (!hasError) {
        document.getElementById('form').submit();
    }
}

function alertaErro(element) {
    element.style.border = 'solid 1px #F52E2E';
    document.querySelector('.msg-error-' + element.name).style.display = 'block'
}

function confirmaPreenchimento(element) {
    element.style.border = 'solid 1px #00C22B';
    document.querySelector('.msg-error-' + element.name).style.display = 'none'
}

botao.addEventListener('click', () => validaInformacoes());