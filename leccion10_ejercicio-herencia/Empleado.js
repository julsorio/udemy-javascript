class Empleado extends Persona {
    constructor(nombre, apellido, edad, sueldo) {
        super(nombre, apellido, edad);
        this._sueldo = sueldo;
        this._idEmpleado = Persona.contadorPersonas;
    }

    get idEmpleado() {
        return this._idEmpleado;
    }

    get sueldo() {
        return this._sueldo;
    }

    set sueldo(sueldo) {
        this._sueldo = sueldo;
    }
    
    toString() {
        return super.toString() + ' ' + this._sueldo;
    }
}

