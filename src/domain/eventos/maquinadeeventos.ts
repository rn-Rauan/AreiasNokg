import { Evento } from "./evento";



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



