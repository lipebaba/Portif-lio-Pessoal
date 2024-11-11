// Validação do formulário
document.getElementById('form-contato').addEventListener('submit', function(event) {
    event.preventDefault();

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let mensagem = document.getElementById('mensagem').value;

    if (nome && email && mensagem) {
        // Exibir mensagem de confirmação
        document.getElementById('mensagem-confirmacao').style.display = 'block';
        // Limpar o formulário
        document.getElementById('form-contato').reset();
    } else {
        alert("Por favor, preencha todos os campos!");
    }
});
