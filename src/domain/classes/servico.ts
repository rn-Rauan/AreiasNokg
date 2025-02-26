import { Aluno } from "./alunos";

/**
 * Classe Servico que representa o serviço de atendimento ao aluno.
 */
export class Servico {
    private aluno: Aluno | undefined;
    private tempoParaServir: number;
    private bloqueado: boolean = false;

    constructor(tempoParaServir: number) {
        this.tempoParaServir = tempoParaServir;
    }

    // Adiciona um aluno ao serviço
    public adicionarAluno(aluno: Aluno): void {
        if (this.temAluno()) throw new Error('Já existe um aluno no atendimento!');
        this.aluno = aluno;
    }

    // Remove o aluno do serviço
    public removerAluno(): Aluno {
        if (!this.temAluno()) throw new Error('Não há aluno no serviço para remover!');
        let alunoAtendido: Aluno = this.aluno!;
        this.aluno = undefined;
        return alunoAtendido;
    }

    // Verifica se há um aluno no serviço
    public temAluno(): boolean {
        return this.aluno != undefined;
    }
    
    // Retorna o tempo necessário para servir o aluno
    public getTempoParaServir(): number {
        return this.tempoParaServir;
    }

    // Retorna se o serviço está bloqueado
    public getBloqueado(): boolean {
        return this.bloqueado;
    }

    // Bloqueia o serviço
    public setBloquearServico(): void {
        this.bloqueado = true;
    }

    // Desbloqueia o serviço
    public desbloquearServico(): void {
        this.bloqueado = false;
    }
}
