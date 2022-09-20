export class Cliente {
    nome: string;
    idade: string;
    email: string;
    telefone: string;

    constructor(
        nome: string,
        idade: string,
        email: string,
        telefone: string,
    ){
        this.nome = nome
        this.idade = idade
        this.email = email
        this.telefone = telefone
    }

    verInfo(){
        console.log(`As informações do cliente são:
        O nome do cliente é: ${this.nome}
        A idade do cliente é: ${this.idade}
        O email do cliente é: ${this.email}
        O telefone do cliente é: ${this.telefone}`)
    }
}