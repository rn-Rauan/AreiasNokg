import { Parametros } from "./paramentrosDeSimulacao";
import { Resultados } from "./resultados";


export class Simulacao{
    parametros : Parametros 
    resultados : Resultados  | undefined;
    constructor(parametros : Parametros,){
        this.parametros = parametros;
    }
}