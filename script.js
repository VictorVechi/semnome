
const login = document.getElementById("email");
const senha = document.getElementById("senha");
const botao = document.getElementById('botao')


botao.addEventListener('click', function (botao) {
    botao.preventDefault();
    if (email.value.indexOf('@') === -1 || email.value.indexOf('@') === 0 || email.value.indexOf('@') === email.value.length - 1 || email.value.indexOf('.') === -1 || email.value.indexOf('.') === 0 || email.value.indexOf('.') === email.value.length - 1 || senha.value.length < 7) {
        alert('Login ou senha inválida')
    } else {
        alert('redirecionando para pagina')
    }
}
)

