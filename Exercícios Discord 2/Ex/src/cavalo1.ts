import { Animal } from "./animal";
export class Cavalo1 extends Animal{
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
            Dados do cavalo
            O nome do cavalo é: ${this.nome}
            A idade do cavalo é: ${this.idade}
            O som do cavalo é: ${this.som}
            A velocidade do cavalo é: ${this.correr}`);

        }
}