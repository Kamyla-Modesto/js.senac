function inicio () {
    let nome = window.prompt ('Qual o seu nome?');
    let idade = window.prompt ('Qual a sua idade?');
    let interesse = window.prompt ('Qual seu principal interesse?');
    let resposta = document.getElementById('resultado');
    resposta.innerHTML = `<p>Seja bem-vindo(a),
${nome}! Que legal ter você por aqui. Com seus ${idade}
anos, e seu interesse em ${interesse}, temos
certeza de que vai gostar do nosso conteúdo. Explore o
site!</p>`;
}

function limparResultado() {
    let resposta = document.getElementById('resultado');
    resposta.innerHTML = `
        <p id="initial-message">
            Aguardando sua interação... Clique em "Chamar Boas-Vindas" para iniciar.
        </p> `};