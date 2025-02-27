export class Resultados{
    tamanhoMedioFilaExterna : number;
    tamanhoMedioFilaInterna : number;   
    tempoMedioOcupacaoMesa : number;
    tempoMedioparaSerAtendido : number;
    tempoSimulacao : number;

    constructor(tamanhoMedioFilaexterna : number,tamanhoMedioFilaInterna : number,tempoMedioOcupacaoMesa : number,tempoMedioparaSerAtendido : number,tempoSimulacao : number){
        this.tamanhoMedioFilaExterna = tamanhoMedioFilaexterna;
        this.tamanhoMedioFilaInterna = tamanhoMedioFilaInterna;
        this.tempoMedioOcupacaoMesa = tempoMedioOcupacaoMesa;
        this.tempoMedioparaSerAtendido = tempoMedioparaSerAtendido;
        this.tempoSimulacao = tempoSimulacao; 
    }
}



