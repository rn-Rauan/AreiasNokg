import { Mesa } from "./mesa";

/**
 * Classe RepositorioDeMesas que gerencia a criação e controle das mesas do refeitório.
 */
export class RepositorioDeMesas {
    mesa: Mesa[] = [];
    quantidadeDeMesas: number;

    constructor(quantidadeDeMesas: number) {
        this.quantidadeDeMesas = quantidadeDeMesas;
        if (quantidadeDeMesas <= 0) throw new Error('A quantidade de mesas não pode ser inferior ou igual a 0.');
        this.createAllMesas(quantidadeDeMesas);
    }

    // Cria todas as mesas
    private createAllMesas(quantidadeDeMesas: number): void {
        for (let i: number = 0; i < quantidadeDeMesas; i++) {
            this.mesa.push(this.createNewMesa());
        }
    }

    // Cria uma nova mesa
    private createNewMesa(): Mesa {
        return new Mesa();
    }
}
