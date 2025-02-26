/**
 * Classe Catraca que gerencia a passagem do aluno e o bloqueio/desbloqueio da catraca.
 */

import { Aluno } from "./alunos";

export class Catraca {
    private aluno: Aluno | undefined;
    private bloqueada: boolean = false;

    // Adiciona um aluno na catraca
    public adicionarAluno(aluno: Aluno): void {
        if (this.bloqueada == true || this.temAlguem() == true) throw new Error('A catraca está bloqueada ou ocupada.');
        this.aluno = aluno;
    }
    
    // Remove o aluno da catraca e retorna o aluno removido
    public removerAluno(): Aluno {
        if (this.temAlguem() == false) throw new Error('Não há ninguém para remover da catraca!');
                
        let alunoRemovido: Aluno;
        alunoRemovido = this.aluno!;
        this.aluno = undefined;
        return alunoRemovido;
    }

    // Verifica se a catraca está ocupada por algum aluno
    public temAlguem(): boolean {
        return this.aluno != undefined;
    }

    // Bloqueia a catraca
    public bloquearCatraca(): void {
        if (this.bloqueada == true) throw new Error('A catraca já está bloqueada!');
        this.bloqueada = true;
    }

    // Desbloqueia a catraca
    public desbloquearCatraca(): void {
        if (this.bloqueada == false) throw new Error("A catraca já está desbloqueada!");
        this.bloqueada = false;
    }

    // Verifica se a catraca está bloqueada
    public catracaBloqueada(): boolean {
        return this.bloqueada;
    }
}