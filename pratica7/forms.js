document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('meuFormulario');
    const inputNome = document.getElementById('nome');
    const inputEmail = document.getElementById('email');
    const erroNome = document.getElementById('nomeErro');
    const erroEmail = document.getElementById('emailErro');
    const statusFormulario = document.getElementById('statusFormulario');

    function mostrarErro(inputElemento, mensagemErroElemento, mensagem) {
        inputElemento.classList.add('invalido');
        inputElemento.classList.remove('valido');
        mensagemErroElemento.textContent = mensagem;
    }

    function limparErro(inputElemento, mensagemErroElemento) {
        inputElemento.classList.remove('invalido');
        inputElemento.classList.add('valido');
        mensagemErroElemento.textContent = '';
    }

    function validarNome() {
        const nomeValor = inputNome.value.trim();
        if (nomeValor === '') {
            mostrarErro(inputNome, erroNome, 'Por favor, preencha seu nome.');
            return false;
        }
        limparErro(inputNome, erroNome);
        return true;
    }

    function validarEmail() {
        const emailValor = inputEmail.value.trim();
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailValor === '') {
            mostrarErro(inputEmail, erroEmail, 'Por favor, preencha seu e-mail.');
            return false;
        }

        if (!regexEmail.test(emailValor)) {
            mostrarErro(inputEmail, erroEmail, 'Por favor, insira um e-mail válido.');
            return false;
        }

        limparErro(inputEmail, erroEmail);
        return true;
    }

    // eventos dos campos
    inputNome.addEventListener('input', validarNome);
    inputEmail.addEventListener('input', validarEmail);

    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault();

        const nomeValido = validarNome();
        const emailValido = validarEmail();

        if (nomeValido && emailValido) {
            statusFormulario.textContent = 'Formulário enviado com sucesso!';
            statusFormulario.classList.add('sucesso');
            statusFormulario.classList.remove('erro');
            formulario.reset();

            inputNome.classList.remove('valido');
            inputEmail.classList.remove('valido');

            setTimeout(() => {
                statusFormulario.textContent = '';
                statusFormulario.classList.remove('sucesso');
            }, 5000);
        } else {
            statusFormulario.textContent = 'Por favor, corrija os erros para enviar.';
            statusFormulario.classList.add('erro');
            statusFormulario.classList.remove('sucesso');
        }
    });
});