import { Aluno } from "./alunos";
import { FilaExterna } from "./filaexterna";

export class FilaInterna extends FilaExterna {
    limite: number;

    constructor(limite: number) {
        super();
        if (limite <= 0) {
            throw new Error('Não é possível adicionar um limite igual ou inferior a 0.');
        }
        this.limite = limite;
    }

    // Adiciona um aluno na fila interna (se não estiver cheia)
    public adicionarAluno(aluno: Aluno): void {
        if (this.filaCheia()) throw new Error('Tentando adicionar aluno em uma fila cheia');
        else this.fila.push(aluno);
    }

    // Remove o primeiro aluno da fila interna e retorna o aluno removido
    public removerAluno(): Aluno {
        if (this.fila.length == 0) throw new Error("Não há ninguém para remover");
        return this.fila.shift()!;
    }

    // Verifica se a fila interna está cheia
    public filaCheia(): boolean {
        return this.getTamanhoDaFila() == this.limite;
    }

    // Retorna o tamanho da fila
    public getTamanhoDaFila(): number {
        return this.fila.length;
    }
}
