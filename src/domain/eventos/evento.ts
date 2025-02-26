import { Refeitorio } from "../classes/refeitorio";
import { MaquinaDeEventos } from "./maquinadeeventos";

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
