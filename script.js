
const login = document.getElementById("login");
const senha = document.getElementById("senha");
const botao = document.getElementById('botao')


botao.addEventListener('click', function (botao) {
    botao.preventDefault();
    if (login.value.indexOf('@') === -1 || login.value.indexOf('@') === 0 || login.value.indexOf('@') === login.value.length - 1 || login.value.indexOf('.') === -1 || login.value.indexOf('.') === 0 || login.value.indexOf('.') === login.value.length - 1 || senha.value.length < 7) {
        alert('Login ou senha inválida')
    } else {
        alert('redirecionando para pagina')
    }
}
)

