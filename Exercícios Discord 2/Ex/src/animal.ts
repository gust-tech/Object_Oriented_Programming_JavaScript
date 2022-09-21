export abstract class Animal {
    nome: string;
    idade: number;
    som: string;
    correr: string;

    constructor(
        nome: string,
        idade: number,
        som: string,
        correr: string,
    ){
        this.nome = nome
        this.idade = idade
        this.som = som
        this.correr = correr
    }

    nome_():void{
    }

    idade_():void{
    }
    
    som_():void{
    }

    correr_():void{   
    }
}