class Cadastro {
    constructor(nome, email, senha, confirmarSenha, rg, cep, estado, cidade, bairro, rua, numero, complemento){
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.confirmarSenha = confirmarSenha;
        this.rg = rg;
        this.cep = cep;
        this.estado = estado;
        this.cidade = cidade;
        this.bairro = bairro;
        this.rua = rua;
        this.numero = numero;
        this.complemento = complemento;
    }
    
    validarSenha(){
        if(this.senha == this.confirmarSenha){
            return true;
        }else{
            return false;
        }
    }

    validarEmail(){
        if(this.email.indexOf("@") != -1){
            if(this.email.indexOf("@") != this.email.length - 1){
                return true;
            }else{
                return false;
            }
        }else{
            return false;
        }
    }
}