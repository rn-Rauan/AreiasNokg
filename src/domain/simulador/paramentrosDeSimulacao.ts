export class Parametros{
    limiteFilaInterna : number;
    limiteDeMesas : number;
    tempoMedioDigitarMatricula : number;
    tempoMedioServirComida : number;
    tempoMedioOcupacaoMesa : number;
    qunatidadeAlunosLiberarCatraca : number;
    quantidadeDeAlunos : number;
    intervaloAtendimentoRefeitorio : number;

    constructor(limiteFilaInterna : number,limiteDeMesas : number,  tempoMedioDigitarMatricula : number, tempoMedioServirComida : number,tempoMedioOcupacaoMesa : number,qunatidadeAlunosLiberarCatraca : number,quantidadeDeAlunos : number,   intervaloAtendimentoRefeitorio : number ){
        this.limiteFilaInterna = limiteFilaInterna;
        this.limiteDeMesas = limiteDeMesas;
        this.tempoMedioDigitarMatricula = tempoMedioDigitarMatricula;
        this.tempoMedioServirComida = tempoMedioServirComida;
        this.tempoMedioOcupacaoMesa = tempoMedioOcupacaoMesa;
        this.qunatidadeAlunosLiberarCatraca = qunatidadeAlunosLiberarCatraca;
        this.quantidadeDeAlunos = quantidadeDeAlunos;
        this.intervaloAtendimentoRefeitorio = intervaloAtendimentoRefeitorio;
    }

}