
import { Aluno } from "../classes/alunos";
import { Refeitorio } from "../classes/refeitorio";
import { MaquinaDeEventos } from "../eventos/maquinadeeventos";
import { DesbloquearServico } from "./desbloquearservico";
import { Evento } from "./evento";


export class ConcluirRefeicao extends Evento {
    aluno: Aluno;

    constructor(timeStamp: number, refeitorio: Refeitorio, maquina: MaquinaDeEventos, aluno: Aluno) {
        super(timeStamp, refeitorio, maquina);
        this.aluno = aluno;
    }

    processarEvento(): void {
        console.log(`Evento - ConcluirRefeicao - Time:${this.timeStamp}`);

        // Remove o aluno da mesa após a refeição
        this.refeitorio.removerAlunoDaMesa(this.aluno);
        this.refeitorio.setAlunosQueSairam(this.aluno);


        // Se o serviço estava bloqueado, agenda o desbloqueio
        if (this.refeitorio.servico.getBloqueado()) {
            let desbloquearServico: DesbloquearServico;
            desbloquearServico = new DesbloquearServico(this.timeStamp, this.refeitorio, this.maquinaEventos);
            this.maquinaEventos.adicionarEvento(desbloquearServico);
        }
    }
}
                                                                                          