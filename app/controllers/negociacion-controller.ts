import { Negociacion } from "../models/negociacion.js";

export class NegociacionController {
    private inputFecha: HTMLInputElement;
    private inputCantidad: HTMLInputElement;
    private inputValor: HTMLInputElement;

    constructor() {
        this.inputFecha = document.querySelector('#fecha');
        this.inputCantidad = document.querySelector('#cantidad');
        this.inputValor = document.querySelector('#valor');
    }

    agrega() : void {
        const negociacion = this.crearNegociacion();
        console.log(negociacion);
        this.limpiaFormulario();
    }

    crearNegociacion() : Negociacion {
        const regexp = /-/g;
        const fecha = this.inputFecha.value.replace(regexp,',');
        const cantidad = parseInt(this.inputCantidad.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacion(
            new Date(fecha),
            cantidad,
            valor
        );
    }

    limpiaFormulario() : void {
        this.inputFecha.value = '';
        this.inputCantidad.value = '';
        this.inputValor.value = '';
        this.inputFecha.focus();
    }

    
}