//Classe abstrata não pode ser instanciada
export class Conta {
    constructor(saldoInicial, cliente, agencia) {
        if(this.constructor == Conta){
            throw new Error("Você não deveria instanciar um objeto do tipo Conta diretamente pois essa é uma classe abstrata")
        }
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
        
    }
    get cliente() {
        /**assessor get */
        return this._cliente;
    }

    set cliente(novoValor) {
        /**Assessor set */
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get saldo() {
        return this._saldo;
    }
    //método abstrato
    sacar(valor) {
        throw new Error("O método sacar da conta é abstrato");
    }
    _sacar(valor, taxa) {
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }
        return 0;
    }

    depositar(valor) {
        if (valor <= 100) {
            return; //o retorno colocado primeiro
        }
        this._saldo += valor;
    }

    transferir(valor, conta) {
        /**primeiro saca */
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado); /**depois deposita */
    }
}
