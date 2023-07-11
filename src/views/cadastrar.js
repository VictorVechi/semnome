function cadastrar(event) {
    event.preventDefault();
    let senha = document.getElementById("senha").value;
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
        if (dados[i] == "") {
            preenchido = false;
            break;
        }
    }

    if (preenchido) {
        let cadastro = new Cadastro(...dados);
        
        console.log(cadastro);

        if (cadastro.validarEmail() && cadastro.validarSenha()) {
            alert("Cadastro realizado com sucesso");
        } else {
            alert("Email ou senha inválidos");
        }
    } else {
        alert("Preencha todos os campos!");
    }
}