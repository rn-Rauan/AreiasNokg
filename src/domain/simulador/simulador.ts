import { Aluno } from "../classes/alunos";
import { Refeitorio } from "../classes/refeitorio";
import { ChegadaAluno } from "../eventos/chegadadealuno";
import { MaquinaDeEventos } from "../eventos/maquinadeeventos";
import { Simulacao } from "./simulacao";

class Simulador{
    refeitorio : Refeitorio;
    maquina : MaquinaDeEventos;
    simulacao : Simulacao;

    constructor(simulacao : Simulacao){
        this.simulacao = simulacao
        this.refeitorio = new Refeitorio(this.simulacao.parametros.limiteFilaInterna, this.simulacao.parametros.limiteDeMesas, this.simulacao.parametros.tempoMedioServirComida)
        this.maquina = new MaquinaDeEventos()
        this.configurarChegadaDeAlunos()
    } 

    private configurarChegadaDeAlunos(){
       for(let i : number = 0; i < this.simulacao.parametros.quantidadeDeAlunos; i++ ){
        let tempoMedioDigitarMatricula : number = Math.random() * 2 * this.simulacao.parametros.tempoMedioDigitarMatricula;
        let tempoMedioOcuparMesa : number = Math.random() * 2 * this.simulacao.parametros.tempoMedioOcupacaoMesa;
        let aluno : Aluno = new Aluno(tempoMedioDigitarMatricula, tempoMedioOcuparMesa);
        let instanteDeChegadda : number = Math.random() * this.simulacao.parametros.intervaloAtendimentoRefeitorio
        let chegadaAluno : ChegadaAluno = new ChegadaAluno(instanteDeChegadda,this.refeitorio,this.maquina,aluno);
        this.maquina.adicionarEvento(chegadaAluno);

       }
    }

    public executarSimulacao(){
        console.log("Simulação iniciada");
        this.maquina.processarEventos();
        console.log("Simulação encerrada");

    }

    public getSimulacao() : Simulacao{
        return this.simulacao;
    }

}

