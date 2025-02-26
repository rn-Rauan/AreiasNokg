import { Aluno } from "../classes/alunos";
import { Refeitorio } from "../classes/refeitorio";
import { ChamarAlunoParaCatraca } from "./chamarAlunoParaCatraca";
import { MaquinaDeEventos } from "./maquinadeeventos";

export class ChegadaAluno extends Event {
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
