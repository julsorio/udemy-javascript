class Persona {

    email = 'default@email.com';

    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
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

    //metodo estatico
    static saludar() {
        console.log('saludos desde metodo static');
    }

    static saludar2(persona) {
        console.log(persona.nombre);
    }
}

let persona1 = new Persona('felipe', 'domingo');
//persona1.saludar(); no es posible llamar un objeto estatico desde una instancia
Persona.saludar();
Persona.saludar2(persona1);

//acceder a un atributo del objeto
console.log(persona1.email);

//los metodos estaticos se heredan

class Empleado extends Persona {
    constructor(nombre, apellido, departamento) {
        super(nombre, apellido);
        this._departamento = departamento;
    }
}

let empleado1 = new Empleado('alvaro', 'alvarez', 'contabilidad');

Empleado.saludar();
Empleado.saludar2(empleado1);

//atributos estaticos

class Persona2 {
    static contadorInstancias = 0;

    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;

        Persona2.contadorInstancias ++;
    }
}

let persona2 = new Persona2('jenaro', 'jimenez');
console.log(Persona2.contadorInstancias);

//se heredan también los atributos estaticos
class Empleado2 extends Persona2 {
    constructor(nombre, apellido, departamento)     {
        super(nombre, apellido);
        this._departamento = departamento;
    }
}

let empleado2 = new Empleado2('armando', 'lopez', 'sistemas');
console.log(Empleado2.contadorInstancias);


class Persona3 {
    static contadorPersona = 0;

    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
        this.id = ++Persona3.contadorPersona;
    }

    nombreCompleto() {
        return this.id + ' ' + this._nombre + ' ' + this._apellido;
    }

    toString() {
        return this.nombreCompleto();
    }
}

class Empleado3 extends Persona3 {
    constructor (nombre, apellido, departamento) {
        super(nombre, apellido);
        this._departamento = departamento;
    }

    nombreCompleto() {
        return super.nombreCompleto()  + ' ' + this._departamento;
    }
}

let personaje = new Persona3('gerson', 'gutierrez');
console.log(personaje.toString());

let unEmpleado = new Empleado3('alfonso', 'becerra', 'contabilidad');
console.log(unEmpleado.nombreCompleto());

//constantes estaticas
/**
 * no se puede usar const
 * 
 * se puede crear un metodo estatico
 */

class Persona4 {

    static get MAX_OBJETOS() {
        return 5;
    }
}

console.log(Persona4.MAX_OBJETOS);