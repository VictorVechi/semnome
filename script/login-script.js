
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const botao = document.getElementById('botao');


botao.addEventListener('click', function (botao) {
    // botao.preventDefault();
    if (email.value.indexOf('@') === -1 || email.value.indexOf('@') === 0 || email.value.indexOf('@') === email.value.length - 1 || email.value.indexOf('.') === -1 || email.value.indexOf('.') === 0 || email.value.indexOf('.') === email.value.length - 1 || senha.value.length < 7) {
        alert('Login ou senha inválida')
    } else {
        window.location.href = 'http://127.0.0.1:5500/html/recuperacao.html'
    }
}
)


