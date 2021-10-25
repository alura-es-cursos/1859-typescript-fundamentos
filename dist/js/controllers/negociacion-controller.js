import { Negociacion } from "../models/negociacion.js";
export class NegociacionController {
    constructor() {
        this.inputFecha = document.querySelector('#fecha');
        this.inputCantidad = document.querySelector('#cantidad');
        this.inputValor = document.querySelector('#valor');
    }
    agrega() {
        const negociacion = this.crearNegociacion();
        console.log(negociacion);
        this.limpiaFormulario();
    }
    crearNegociacion() {
        const regexp = /-/g;
        const fecha = this.inputFecha.value.replace(regexp, ',');
        const cantidad = parseInt(this.inputCantidad.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacion(new Date(fecha), cantidad, valor);
    }
    limpiaFormulario() {
        this.inputFecha.value = '';
        this.inputCantidad.value = '';
        this.inputValor.value = '';
        this.inputFecha.focus();
    }
}
