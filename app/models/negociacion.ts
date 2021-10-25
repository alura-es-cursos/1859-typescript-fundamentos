export class Negociacion {
    private _fecha;
    private _cantidad;
    private _valor;

    constructor(fecha,cantidad,valor) {
        this._fecha = fecha;
        this._cantidad = cantidad;
        this._valor = valor;
    }

    get fecha() {
        return this._fecha;
    }

    get cantidad() {
        return this._cantidad;
    }

    get valor() {
        return this._valor;
    }

    get total() {
        return this._cantidad * this._valor;
    }
}