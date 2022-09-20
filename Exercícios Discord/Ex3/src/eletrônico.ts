export class Eletrônico {
    nome: string;
    modelo: string;
    marca: string;
    serial: string;

    constructor(
        nome: string,
        modelo: string,
        marca: string,
        serial: string,
    ){
        this.nome = nome
        this.modelo = modelo
        this.marca = marca
        this.serial = serial
    }

    verInfo(){
        console.log(`O eletrônico procurado é
        O nome da TV é: ${this.nome}
        O modelo da TV é: ${this.modelo}
        A marca da TV é: ${this.marca}
        O serial é: ${this.serial}`)
    }

}