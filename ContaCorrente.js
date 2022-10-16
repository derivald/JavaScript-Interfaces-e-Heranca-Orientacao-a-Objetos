import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    static numeroDeContas = 0; /**atributo/variável estático  da classe */
    // https://github.com/tc39/proposal-class-fields sobre private deve ser usado # mais ainda não autorizado,  por convenção usar o _underline

    constructor(agencia, cliente) {
        this.agencia = agencia;
        this._cliente = cliente;
        this._saldo = 0; //boa pratica usar o _ underline ao invés da cerquilha # para atributo privado
        ContaCorrente.numeroDeContas += 1; /**variável da classe */
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

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
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
