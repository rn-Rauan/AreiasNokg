class Aluno {
    private chegadaNaFilaExterna: number | undefined;
    private chegadaNaCatraca: number | undefined;
    private chegadaNaFilaInterna: number | undefined;
    private chegadaNoAtendimento: number | undefined;
    private tempoDigitarMatricula: number;
    private tempoDeOcupacaoDaMesa: number;
    
    constructor(tempoDigitarMatricula: number, tempoOcuparMesa: number) {
        this.tempoDigitarMatricula = tempoDigitarMatricula;
        this.tempoDeOcupacaoDaMesa = tempoOcuparMesa;
    }

    // Registra o momento de chegada do aluno na fila externa
    public registrarChegadaNaFilaExterna(momento: number): void {
        this.chegadaNaFilaExterna = momento;
    }

    // Registra o momento de chegada do aluno na fila interna
    public registrarChegadaNaFilaInterna(momento: number): void {
        this.chegadaNaFilaInterna = momento;
    }

    // Registra o momento de chegada do aluno na catraca
    public registrarChegadaNaCatraca(momento: number): void {
        this.chegadaNaCatraca = momento;
    }

    // Registra o momento de chegada do aluno no atendimento
    public registrarChegadaNoAtendimento(momento: number): void {
        this.chegadaNoAtendimento = momento;
    }

    // Calcula o tempo que o aluno passou na fila externa antes de chegar na catraca
    public getTempoNaFilaExterna(): number {
        if (this.chegadaNaCatraca == undefined || this.chegadaNaFilaExterna == undefined) {
            throw new Error("Não é possível calcular o tempo de espera de um aluno que não chegou na fila ou na catraca");
        }
        return this.chegadaNaCatraca - this.chegadaNaFilaExterna;
    }

    // Calcula o tempo que o aluno passou na fila interna antes de ser atendido
    public getTempoNaFilaInterna(): number {
        if (this.chegadaNoAtendimento == undefined || this.chegadaNaFilaInterna == undefined) {
            throw new Error("Não é possível calcular o tempo de espera de um aluno que não chegou na fila interna ou no atendimento");
        }
        return this.chegadaNoAtendimento - this.chegadaNaFilaInterna;
    }
    
    // Retorna o tempo necessário para o aluno digitar a matrícula
    public getTempoDigitarMatricula(): number {
        return this.tempoDigitarMatricula;
    }

    // Retorna o tempo de ocupação da mesa
    public getTempoOcupacaoMesa(): number {
        return this.tempoDeOcupacaoDaMesa;
    }
}
