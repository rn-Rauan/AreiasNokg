import { Aluno } from "../classes/alunos";
import { Refeitorio } from "../classes/refeitorio";
import { ChamarAlunoParaCatraca } from "./chamarAlunoParaCatraca";

export class MaquinaDeEventos {
    evento: Evento[] = [];
    instanteDeSimulacao: number = 0;

    /**
     * Processa os eventos na fila, sempre executando o mais próximo no tempo.
     */
    public processarEventos(): void {
        while (this.evento.length > 0) {
            this.evento = this.evento.sort((evento1, evento2) => evento1.getTimeStamp() - evento2.getTimeStamp());
            let primeiroEvento: Evento = this.evento.shift()!;
            primeiroEvento.processarEvento();
            
        }
    }

    /**
     * Adiciona um novo evento à fila de eventos.
     * @param novoEvento O evento a ser adicionado.
     */
    public adicionarEvento(novoEvento: Evento): void {
        this.evento.push(novoEvento);
    }

    /**
     * Atualiza o instante de simulação.
     * @param novoInstanteSimulacao O novo instante da simulação.
     * @throws Error Se o novo instante for menor que o instante atual.
     */
    private atualizarInstanteDeSimulacao(novoInstanteSimulacao: number): void {
        if (novoInstanteSimulacao < this.instanteDeSimulacao) {
            throw new Error("Não pode voltar no tempo");
        }
        this.instanteDeSimulacao = novoInstanteSimulacao;
    }
}


export abstract class Evento {
    protected timeStamp: number;
    protected refeitorio: Refeitorio;
    protected maquinaEventos: MaquinaDeEventos;

    constructor(timeStamp: number, refeitorio: Refeitorio, maquinaDeEventos: MaquinaDeEventos) {
        this.timeStamp = timeStamp;
        this.refeitorio = refeitorio;
        this.maquinaEventos = maquinaDeEventos;
    }

    public getTimeStamp(): number {
        return this.timeStamp;
    }

    // Método abstrato que será implementado por classes concretas
    abstract processarEvento(): void;
}

export class ChegadaAluno extends Evento {
    private aluno: Aluno;

    constructor(timeStamp: number, refeitorio: Refeitorio, maquinaDeEventos: MaquinaDeEventos, aluno: Aluno) {
        super(timeStamp, refeitorio, maquinaDeEventos);
        this.aluno = aluno;
    }

    processarEvento(): void {
        console.log(`Evento - chegada do Aluno - Time:${this.timeStamp}`);

        // Verifica se a fila externa estava vazia antes de adicionar o aluno
        let filaEstavaVazia: boolean = this.refeitorio.filaExterna.filaVazia();
        let alunoChegou: boolean = this.refeitorio.chegadaDoAluno(this.aluno);
        this.aluno.registrarChegadaNaFilaExterna(this.timeStamp);

        //registra o momento que o aluno chegou na fila externa
        this.aluno.registrarChegadaNaFilaExterna(this.timeStamp);

        // Se o aluno chegou, e a fila estava vazia, e a catraca não está bloqueada, agenda o próximo evento
        if (alunoChegou && filaEstavaVazia && !this.refeitorio.catraca.catracaBloqueada() && !this.refeitorio.catraca.temAlguem()) {
            let chamarParaCatraca: ChamarAlunoParaCatraca = new ChamarAlunoParaCatraca(this.timeStamp, this.refeitorio, this.maquinaEventos);
            this.maquinaEventos.adicionarEvento(chamarParaCatraca);
            this.aluno.registrarChegadaNaCatraca(this.timeStamp);
        }
    }
}

