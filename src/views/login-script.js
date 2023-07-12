
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const login = document.getElementById('login');
const botao2 = document.getElementById('cadastrar-se');

login.addEventListener('click', function (botao) {
    // botao.preventDefault();
    if (email.value.indexOf('@') === -1 || email.value.indexOf('@') === 0 || email.value.indexOf('@') === email.value.length - 1 || email.value.indexOf('.') === -1 || email.value.indexOf('.') === 0 || email.value.indexOf('.') === email.value.length - 1 || senha.value.length < 7) {
        alert('Login ou senha inválida')
    } else {
        window.location.href = '../pages/home.html'
    }
}
)
botao2.addEventListener('click', function (botao) {
    window.location.href = '../pages/cadastro.html'
})

