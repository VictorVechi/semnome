class Cadastro {
    constructor(nome, email, senha, confirmarSenha, rg, cep, estado, cidade, bairro, rua, numero, complemento){
        this.nome = nome || "";
        this.email = email || "";
        this.senha = senha || "";
        this.confirmarSenha = confirmarSenha || "";
        this.rg = rg || "";
        this.cep = cep || "";
        this.estado = estado || "";
        this.cidade = cidade || "";
        this.bairro = bairro || "";
        this.rua = rua || "";
        this.numero = numero || "";
        this.complemento = complemento || "";
    }
    
    validarSenha(){
        if(this.senha == this.confirmarSenha){
            return true;
        }else{
            return false;
        }
    }
}