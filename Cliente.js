export class Cliente {
    constructor(nome, cpf, _senha) {
        this.nome = nome;
        this._cpf = cpf;
        this._senha = _senha;
    }
    get cpf() {
        return this._cpf;
    }
   autenticar(){
    return false;
    }
}
