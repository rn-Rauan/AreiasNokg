import { Aluno } from "../classes/alunos";
import { ChegadaAlunoFilaInterna } from "./chegadaAlunoFilaInterna";
import { Evento } from "./evento";

export class ChamarAlunoParaCatraca extends Evento {
    processarEvento(): void {
        console.log(`Evento - ChamarAlunoParaCatraca - Time:${this.timeStamp}`);

        // Move o aluno para a catraca e obtém o tempo necessário para digitar a matrícula
        let alunoDaCatraca : Aluno = this.refeitorio.moverAlunoCatraca();
        alunoDaCatraca.registrarChegadaNaCatraca(this.timeStamp)
        let tempoDigitarMatricula : number = alunoDaCatraca.getTempoDigitarMatricula()
        // Agenda o próximo evento para mover o aluno para a fila interna após o tempo de digitação
        let agendamento: ChegadaAlunoFilaInterna;
        let instanteChegadaFilaInterna = this.timeStamp + tempoDigitarMatricula;
        agendamento = new ChegadaAlunoFilaInterna(instanteChegadaFilaInterna, this.refeitorio, this.maquinaEventos);
        this.maquinaEventos.adicionarEvento(agendamento);
    }
}    