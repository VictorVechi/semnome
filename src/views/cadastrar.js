function cadastrar(event) {
    event.preventDefault();
    let senha = document.getElementById("senha").value;

    if (senha.length < 8) {
        alert("A senha deve ter no mínimo 8 caracteres");
        document.getElementById("senha").style.border = "1px solid red";
    } else {
        let confirmarSenha = document.getElementById("confirma-senha").value;
        senha = CryptoJS.MD5(senha);
        confirmarSenha = CryptoJS.MD5(confirmarSenha);
        let dados = [
            document.getElementById("nome").value,
            document.getElementById("email").value,
            senha.toString(),
            confirmarSenha.toString(),
            document.getElementById("rg").value,
            document.getElementById("cep").value,
            document.getElementById("estado").value,
            document.getElementById("cidade").value,
            document.getElementById("bairro").value,
            document.getElementById("rua").value,
            document.getElementById("numero").value,
            document.getElementById("complemento").value
        ]

        let preenchido = true;

        for (let i = 0; i < dados.length; i++) {
            if (dados[i] == "" && i != 11) {
                preenchido = false;
                break;
            }
        }

        if (preenchido) {
            let cadastro = new Cadastro(...dados);

            console.log(cadastro);

            if (cadastro.validarEmail() && cadastro.validarSenha()) {
                alert("Cadastro realizado com sucesso");
                window.location.href = "../pages/login.html";
            } else {
                alert("Email ou senha inválidos");
            }
        } else {
            alert("Preencha todos os campos!");
        }
    }

}

function redirecionarLogin(event) {
    event.preventDefault();
    window.location.href = "../pages/login.html";
}