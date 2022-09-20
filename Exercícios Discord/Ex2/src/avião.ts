export class Avião {
    nome: string;
    modelo: string;
    ano: string;
    marca: string;

    constructor(
        nome: string,
        modelo: string,
        ano: string,
        marca: string,
    ){
        this.nome = nome
        this.modelo = modelo
        this.ano = ano
        this.marca = marca
    }

    verInfo(){
        console.log(`O avião descrito é
        O nome do avião é: ${this.nome}
        O modelo do avião é: ${this.modelo}
        O ano desse avião é: ${this.ano}
        A marca do avião é: ${this.marca}`)
    }

}