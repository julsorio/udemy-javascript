class Persona {
    static contadorPersonas = 0;
    
    constructor(nombre, apellido, edad) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;

        this._idPersona = ++ Persona.contadorPersonas;
    }

    get idPersona() {
        return this._idPersona;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get apellido() {
        return this._apellido;
    }

    set apellido(apellido) {
        this._apellido = apellido;
    }

    get edad() {
        return this._edad;
    }

    set edad(edad) {
        this._edad = edad;
    }

    toString() {
        return this.idPersona + ' ' + this._nombre + ' ' + this._apellido + ' ' + this._edad;
    }
}

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

/**
 * se realizan las pruebas 
 */

//objetos de Persona
let persona = new Persona('fernando', 'briceño', 40);
console.log(persona.toString());

let persona2 = new Persona('gabriel', 'guzman', 17);
console.log(persona2.toString());

//objetos de Empleado
let empleado = new Empleado('camilo', 'castillo', 10, 100);
console.log(empleado.toString());

let empleado2 = new Empleado('dario', 'dominguez', 34, 800);
console.log(empleado2.toString());

//objetos de Cliente
let cliente = new Cliente('ernesto', 'figueroa', 84);
console.log(cliente.toString());