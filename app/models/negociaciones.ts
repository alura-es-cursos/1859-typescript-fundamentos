import { Negociacion } from './negociacion.js';

export class Negociaciones {
    private negociaciones: Array<Negociacion> = [];

    agrega(negociacion : Negociacion) {
        this.negociaciones.push(negociacion);
    }

    lista() : ReadonlyArray<Negociacion> {
        return this.negociaciones;
    }
}
