class Cliente extends Persona {
    constructor(nombre, apellido, edad) {
        super(nombre, apellido, edad);
        this._fechaRegistro = new Date();
        this._idCliente = Persona.contadorPersonas;
    }

    get idCliente() {
        return this._idCliente;
    }

    get fechaRegistro() {
        return this._fechaRegistro;
    }

    set fechaRegisto(fechaRegistro) {
        this._fechaRegistro = fechaRegistro;
    }

    toString() {
        return super.toString() + ' ' + this._fechaRegistro;
    }
}