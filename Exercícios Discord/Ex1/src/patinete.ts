export class Patinete {
    nome: string;
    modelo: string;
    aro: string;
    marca: string;

    constructor(
        nome: string,
        modelo: string,
        aro: string,
        marca: string,
    ){
        this.nome = nome
        this.modelo = modelo
        this.aro = aro
        this.marca = marca
    }

    verInfo(){
        console.log(`O patinete procurado é
        O nome do patinete é: ${this.nome}
        O modelo é: ${this.modelo}
        O aro é: ${this.aro}
        A marca é: ${this.marca}`)
    }

}