import { Animal } from "./animal";
export class Cachorro1 extends Animal{
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
        super(nome, idade, som, correr)
        this.nome = nome
        this.idade = idade
        this.som = som
        this.correr = correr
    }  
        verInformacoes(){
            console.log(`
            Dados do cachorro
            O nome do cachorro é: ${this.nome}
            A idade do cachorro é: ${this.idade}
            O som do cachorro é: ${this.som}
            A velocidade do cachorro é: ${this.correr}`);

        }
}