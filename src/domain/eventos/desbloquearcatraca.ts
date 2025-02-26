class DesbloquarCatraca extends Evento {
    processarEvento(): void {
        console.log(`Evento - DesbloquearCatraca - Time:${this.timeStamp}`);

        // Desbloqueia a catraca
        this.refeitorio.catraca.desbloquearCatraca();

        // Agendamento do próximo evento para chamar o aluno para a catraca
        if (!this.refeitorio.filaExterna.filaVazia()) {
            let chamarAlunoCatraca: ChamarAlunoParaCatraca = new ChamarAlunoParaCatraca(this.timeStamp, this.refeitorio, this.maquinaEventos);
            this.maquinaEventos.adicionarEvento(chamarAlunoCatraca);
        }
    }
}
