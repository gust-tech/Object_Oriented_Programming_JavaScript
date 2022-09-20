export class Paciente {
    nome: string;
    tpsangue: string;
    dataint: string;
    doença: string;

    constructor(
        nome: string,
        tpsangue: string,
        dataint: string,
        doença: string,
    ){
        this.nome = nome
        this.tpsangue = tpsangue
        this.dataint = dataint
        this.doença = doença
    }

    verInfo(){
        console.log(`As informações do paciente são:
         O nome é: ${this.nome}
         O tipo do sangue é: ${this.tpsangue}
         A data de internação é: ${this.dataint}
         A doença é: ${this.doença}`);
    }
}