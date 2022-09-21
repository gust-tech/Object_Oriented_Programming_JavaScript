import { Animal } from "./animal";
export class Preguica1 extends Animal {
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
            Dados da preguica
            O nome da preguiça é: ${this.nome}
            A idade da preguiça é: ${this.idade}
            O som da preguiça é: ${this.som}
            Sobe em árvores: ${this.correr}`);

        }
}