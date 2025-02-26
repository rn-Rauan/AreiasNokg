class ChamarAlunoMesa extends Evento {
    processarEvento(): void {
        console.log(`Evento - ChamarAlunoMesa - Time:${this.timeStamp}`);

        // Move o aluno para uma mesa
        let alunoNaMesa: Aluno = this.refeitorio.adicionarAlunoNaMesa();
        let tempoNaMesa: number = alunoNaMesa.getTempoOcupacaoMesa();

        // Agendamento do evento de conclusão da refeição após o tempo na mesa
        let concluirRefeicao: ConcluirRefeicao = new ConcluirRefeicao(this.timeStamp + tempoNaMesa, this.refeitorio, this.maquinaEventos, alunoNaMesa);
        this.maquinaEventos.adicionarEvento(concluirRefeicao);

        // Se não houver mesas livres, bloqueia o serviço
        if (!this.refeitorio.algumaMesaLivre()) {
            this.refeitorio.servico.setBloquearServico();
        }

        // Se houver alunos na fila interna e o serviço não estiver bloqueado, agenda o próximo evento
        if (!this.refeitorio.filaInterna.filaVazia() && !this.refeitorio.servico.getBloqueado()) {
            let chamarAlunoServico: ChamarAlunoServico = new ChamarAlunoServico(this.timeStamp, this.refeitorio, this.maquinaEventos);
            this.maquinaEventos.adicionarEvento(chamarAlunoServico);
        }
    }
}