function cadastrar(event) {
    event.preventDefault();
    let dados = [
        document.getElementById("nome").value,
        document.getElementById("email").value,
        document.getElementById("senha").value,
        document.getElementById("confirma-senha").value,
        document.getElementById("rg").value,
        document.getElementById("cep").value,
        document.getElementById("estado").value,
        document.getElementById("cidade").value,
        document.getElementById("bairro").value,
        document.getElementById("rua").value,
        document.getElementById("numero").value,
        document.getElementById("complemento").value
    ]
    let cadastro = new Cadastro(...dados);

    console.log(cadastro);

    if (cadastro.validarEmail() && cadastro.validarSenha()) {
        alert("Cadastro realizado com sucesso");
    } else {
        alert("Email ou senha inválidos");
    }
}