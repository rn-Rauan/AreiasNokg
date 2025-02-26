/**
 * Classe Mesa que representa uma mesa onde o aluno realiza a refeição. A mesa pode ser ocupada ou não.
 */

import { Aluno } from "./alunos";

export class Mesa {
    private aluno: Aluno | undefined;
    
    // Adiciona um aluno à mesa
    public adicionarAluno(aluno: Aluno): void {
        if (this.mesaOcupada()) throw new Error('Mesa ocupada!');
        this.aluno = aluno;
    }

    // Remove o aluno da mesa
    public removerAluno(): void {
        if (!this.mesaOcupada()) throw new Error("Mesa já está desocupada!");
        this.aluno = undefined;
    }

    // Verifica se a mesa está ocupada
    public mesaOcupada(): boolean {
        return this.aluno != undefined;
    }
    
    // Retorna o aluno que está ocupando a mesa
    public getAluno(): Aluno | undefined {
        return this.aluno;
    }
}
