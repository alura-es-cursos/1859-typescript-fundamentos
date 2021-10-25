export class Negociacion {
    #fecha;
    #cantidad;
    #valor;

    constructor(fecha,cantidad,valor) {
        this.#fecha = fecha;
        this.#cantidad = cantidad;
        this.#valor = valor;
    }

    get fecha() {
        return this.#fecha;
    }

    get cantidad() {
        return this.#cantidad;
    }

    get valor() {
        return this.#valor;
    }

    get total() {
        return this.#cantidad * this.#valor;
    }
}