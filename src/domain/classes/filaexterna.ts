class FilaExterna {
    protected fila: Aluno[] = [];

    // Adiciona um aluno na fila externa
    public adicionarAluno(aluno: Aluno): void {
        this.fila.push(aluno);
    }

    // Remove o primeiro aluno da fila externa e retorna o aluno removido
    public removerAluno(): Aluno {
        if (this.fila.length == 0) throw new Error("Não há ninguém para remover");
        return this.fila.shift()!;
    }

    // Retorna o tamanho da fila
    public getTamanhoDaFila(): number {
        return this.fila.length;
    }

    // Verifica se a fila está vazia
    public filaVazia(): boolean {
        return this.fila.length == 0;
    }
}
