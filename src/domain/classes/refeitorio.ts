class Refeitorio {
    filaExterna: FilaExterna;
    catraca: Catraca;
    filaInterna: FilaInterna;
    servico: Servico;
    repositorioDeMesas: RepositorioDeMesas;
    alunosQueSairam : Aluno[] =[]

    /**
     * Construtor para inicializar o refeitório com suas componentes.
     * @param limiteFilaInterna Limite de alunos na fila interna.
     * @param quantidadeDeMesas Número de mesas disponíveis.
     * @param tempoParaServir Tempo necessário para servir um aluno.
     */
    constructor(limiteFilaInterna: number, quantidadeDeMesas: number, tempoParaServir: number) {
        this.filaExterna = new FilaExterna();
        this.catraca = new Catraca();
        this.filaInterna = new FilaInterna(limiteFilaInterna);
        this.servico = new Servico(tempoParaServir);
        this.repositorioDeMesas = new RepositorioDeMesas(quantidadeDeMesas);
    }

    /**
     * Registra a chegada de um aluno na fila externa.
     * @param aluno O aluno que chega ao refeitório.
     * @returns True se o aluno foi adicionado à fila externa com sucesso.
     */
    public chegadaDoAluno(aluno: Aluno): boolean {
        this.filaExterna.adicionarAluno(aluno);
        return true;
    }

    /**
     * Move o aluno da fila externa para a catraca.
     * @returns O tempo necessário para o aluno digitar sua matrícula.
     */
    public moverAlunoCatraca(): Aluno {
        let aluno: Aluno = this.filaExterna.removerAluno();
        this.catraca.adicionarAluno(aluno);
        return aluno;
    }

    /**
     * Move o aluno da catraca para a fila interna.
     * @returns O aluno movido para a fila interna.
     */
    public moverParaFilaInterna(): Aluno {
        let aluno: Aluno = this.catraca.removerAluno();
        this.filaInterna.adicionarAluno(aluno);
        return aluno;
    }

    /**
     * Adiciona o aluno ao serviço de alimentação.
     * @returns O tempo necessário para o serviço de alimentação.
     */
    public adicionarNoServico(): Aluno {
        let aluno: Aluno = this.filaInterna.removerAluno();
        this.servico.adicionarAluno(aluno);
        return aluno
    }

    /**
     * Atribui uma mesa livre ao aluno.
     * @returns O aluno que foi colocado na mesa.
     * @throws Error Se não houver mesas disponíveis.
     */
    public adicionarAlunoNaMesa(): Aluno {
        for (let i: number = 0; i < this.repositorioDeMesas.mesa.length; i++) {
            if (this.repositorioDeMesas.mesa[i].mesaOcupada() == false) {
                let aluno: Aluno = this.servico.removerAluno();
                this.repositorioDeMesas.mesa[i].adicionarAluno(aluno);
                return aluno;
            }
        }
        throw new Error('Não há mesas disponíveis para adicionar o aluno.');
    }

    /**
     * Remove o aluno da mesa.
     * @param aluno O aluno a ser removido.
     * @returns True se o aluno foi removido com sucesso.
     * @throws Error Se o aluno não for encontrado nas mesas.
     */
    public removerAlunoDaMesa(aluno: Aluno): Aluno {
        for (let i: number = 0; i < this.repositorioDeMesas.mesa.length; i++) {
            if (this.repositorioDeMesas.mesa[i].getAluno() == aluno) {
                this.repositorioDeMesas.mesa[i].removerAluno();
                return this.repositorioDeMesas.mesa[i].getAluno()!;
            }
        }
        throw new Error('Aluno não encontrado nas mesas');
    }

    /**
     * Verifica se a fila externa está vazia.
     * @returns True se a fila externa estiver vazia.
     */
    public filaExternaVazia(): boolean {
        return this.filaExterna.filaVazia();
    }

    /**
     * Verifica se há mesas livres no refeitório.
     * @returns True se houver ao menos uma mesa livre.
     */
    public algumaMesaLivre(): boolean {
        for (let i: number = 0; i < this.repositorioDeMesas.quantidadeDeMesas; i++) {
            if (this.repositorioDeMesas.mesa[i].mesaOcupada() == false) {
                return true;
            }
        }
        return false;
    }

    /**
     * Verifica se a fila interna está cheia.
     * @returns True se a fila interna estiver cheia.
     */
    public getFilaInternaCheia(): boolean {
        return this.filaInterna.filaCheia();
    }

    /**
     * Bloqueia a catraca, impedindo novos alunos de passarem.
     */
    public bloquearCatraca(): void {
        this.catraca.bloquearCatraca();
    }

    /**
     * Desbloqueia a catraca, permitindo que novos alunos passem.
     */
    public desbloquearCatraca(): void {
        this.catraca.desbloquearCatraca();
    }

    /**
     * Obtém o tamanho atual da fila interna.
     * @returns O tamanho da fila interna.
     */
    public getTamanhoFilaINterna(): number {
        return this.filaInterna.getTamanhoDaFila();
    }

    public setAlunosQueSairam(aluno : Aluno) : void{
        this.alunosQueSairam.push(aluno);
    }

    public getAlunosQueSairam() : Aluno[] {
        return this.alunosQueSairam
    }

    public getTempoDeServir(): number{
        return this.servico.getTempoParaServir();
    }
}