import { Conta } from "./Conta.js";

export class ContaSalario extends Conta{
    construtor(cliente){
      this._saldo;
      this._cliente;
      this._agencia;
      

    }
    sacar(valor){
        const taxa = 1.01;
        return this._sacar(valor, taxa);
    }


}