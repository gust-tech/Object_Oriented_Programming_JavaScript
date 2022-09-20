export class ContaBancaria {
    titular: string;
    agencia: string;
    conta: string;
    saldo: string;

    constructor(
        titular: string,
        agencia: string,
        conta: string,
        saldo: string,
    ){
        this.titular = titular
        this.agencia = agencia
        this.conta = conta
        this.saldo = saldo
    }

    verInfo(){
        console.log(`As informações da conta são:
         O titular é: ${this.titular}
         A agencia é: ${this.agencia}
         A conta é: ${this.conta}
         O saldo é: ${this.saldo}`);
    }
}