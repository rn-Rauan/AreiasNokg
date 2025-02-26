class DesbloquearServico extends Evento {
    processarEvento(): void {
        console.log(`Evento - DesbloquearServico - Time:${this.timeStamp}`);

        // Desbloqueia o serviço
        this.refeitorio.servico.desbloquearServico();

        // Agendamento do próximo evento para chamar o aluno ao serviço
        if (!this.refeitorio.filaInterna.filaVazia()) {
            let chamarAlunoServico: ChamarAlunoServico = new ChamarAlunoServico(this.timeStamp, this.refeitorio, this.maquinaEventos);
            this.maquinaEventos.adicionarEvento(chamarAlunoServico);
        }
    }
}
