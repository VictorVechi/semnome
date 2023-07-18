class Cliente {
    constructor(nome, email, rg) {
        this.nome = nome;
        this.email = email;
        this.rg = rg;
    }

    validarEmail() {
        if (this.email.indexOf("@") != -1) {
            if (this.email.indexOf("@") != this.email.length - 1 && this.email.indexOf("@") - 2 > 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
}

class Cadastro extends Cliente {
    constructor(nome, email, senha, confirmarSenha, rg, cep, estado, cidade, bairro, rua, numero, complemento) {
        super(nome, email, rg)
        this.senha = senha;
        this.confirmarSenha = confirmarSenha;
        this.cep = cep;
        this.estado = estado;
        this.cidade = cidade;
        this.bairro = bairro;
        this.rua = rua;
        this.numero = numero;
        this.complemento = complemento || "";
    }
    validarSenha() {
        if (this.senha == this.confirmarSenha) {
            return true;
        }
        return false;
    }}