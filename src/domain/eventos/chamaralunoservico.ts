import { Aluno } from "../classes/alunos";
import { ChamarAlunoMesa } from "./chamarAlunoMesa";
import { DesbloquarCatraca } from "./desbloquearcatraca";

export class ChamarAlunoServico extends Event {
    processarEvento(): void {
        console.log(`Evento - ChamarAlunoServico - Time:${this.timeStamp}`);

        // Move o aluno para o serviço de alimentação e obtém o tempo no serviço
        let alunoNoServico: Aluno = this.refeitorio.adicionarNoServico();
        alunoNoServico.registrarChegadaNoAtendimento(this.timeStamp)
        

        // Agendamento para mover o aluno para a mesa após o tempo de serviço
        let adicionarNaMesa: ChamarAlunoMesa = new ChamarAlunoMesa(this.timeStamp + this.refeitorio.getTempoDeServir(), this.refeitorio, this.maquinaEventos);
        this.maquinaEventos.adicionarEvento(adicionarNaMesa);

        // Se a catraca estiver bloqueada, agenda o desbloqueio
        if (this.refeitorio.catraca.catracaBloqueada()) {
            let desbloquearCatraca: DesbloquarCatraca;
            desbloquearCatraca = new DesbloquarCatraca(this.timeStamp, this.refeitorio, this.maquinaEventos);
            this.maquinaEventos.adicionarEvento(desbloquearCatraca);
        }
    }
}
