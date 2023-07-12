
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const enviar = document.getElementById('enviar');

enviar.addEventListener('click', function (enviar) {
    // enviar.preventDefault();
    if (email.value.indexOf('@') === -1 || email.value.indexOf('@') === 0 || email.value.indexOf('@') === email.value.length - 1 || email.value.indexOf('.') === -1 || email.value.indexOf('.') === 0 || email.value.indexOf('.') === email.value.length - 1) {
        alert('Login ou senha inválida')
    } else {
        alert("Recuperação de senha enviada com sucesso")
        window.location.href = '../pages/login.html'
    }
}
)