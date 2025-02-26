import { Aluno } from "../classes/alunos";
import { ChamarAlunoParaCatraca } from "./chamarAlunoParaCatraca";
import { ChamarAlunoServico } from "./chamaralunoservico";

export class ChegadaAlunoFilaInterna extends Event {
    processarEvento(): void {
        console.log(`Evento - ChegadaAlunoFilaINterna - Time:${this.timeStamp}`);

        // Verifica se a fila interna estava vazia e movimenta o aluno para a fila interna
        let filaInternaVazia: boolean = this.refeitorio.filaInterna.filaVazia();
        let alunoDaFilaInterna : Aluno = this.refeitorio.moverParaFilaInterna();
        alunoDaFilaInterna.registrarChegadaNaFilaInterna(this.timeStamp);

        // Se a fila interna atingiu o limite, bloqueia a catraca
        if (this.refeitorio.getTamanhoFilaINterna() == this.refeitorio.filaInterna.limite) {
            this.refeitorio.bloquearCatraca();
        }

        // Agendamento do próximo evento para chamar o aluno para o serviço
        if (filaInternaVazia && !this.refeitorio.servico.temAluno() && !this.refeitorio.servico.getBloqueado()) {
            let agendamento: ChamarAlunoServico;
            agendamento = new ChamarAlunoServico(this.timeStamp, this.refeitorio, this.maquinaEventos);
            this.maquinaEventos.adicionarEvento(agendamento);
        }

        // Se houver outros alunos na fila externa e a catraca não estiver bloqueada, agenda a movimentação para a catraca
        if (!this.refeitorio.filaExterna.filaVazia() && !this.refeitorio.catraca.catracaBloqueada()) {
            let chamarParaCatraca: ChamarAlunoParaCatraca = new ChamarAlunoParaCatraca(this.timeStamp, this.refeitorio, this.maquinaEventos);
            this.maquinaEventos.adicionarEvento(chamarParaCatraca);
        }
    }
}
