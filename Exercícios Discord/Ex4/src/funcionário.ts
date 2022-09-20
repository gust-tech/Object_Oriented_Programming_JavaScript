export class Funcionário {
    nome: string;
    contrato: string;
    email: string;
    telefone: string;

    constructor(
        nome: string,
        contrado: string,
        email: string,
        telefone: string,
    ){
        this.nome = nome
        this.contrato = contrado
        this.email = email
        this.telefone = telefone
    }

    verInfo(){
        console.log(`O funcionário descrito é
        O nome do funcionário é: ${this.nome}
        O contrado é: ${this.contrato}
        O email é: ${this.email}
        O telefone é: ${this.telefone}`)
    }

}