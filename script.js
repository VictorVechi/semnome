
const login = document.getElementById("login").value;
const senha = document.getElementById("senha")
const botao = document.getElementById('botao')

botao.addEventListener('click', function (event) {
    event.preventDefault();
    if (login.indexOf('@') == -1 || login.indexOf('@') == 0 || login.indexOf('@') == login.length || login.indexOf('.') == -1 || login.indexOf('.') == 0 || login.indexOf('.') == login.length) {
        alert('Login ou senha inválida')

    }
}
)