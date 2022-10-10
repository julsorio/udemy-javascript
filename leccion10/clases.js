//se recomienda que el nombre de la clase
//inicie en mayuscula
class Persona {
    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
    }

    //el metodo get no se puede llamar como el atributo
    //los atributos se nombran con un guion abajo
    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get apellido() {
        return this.apellido;
    }

    set apellido(apellido) {
        this._apellido = apellido;
    }

    nombreCompleto() {
        return this._nombre + ' ' + this._apellido;
    }

    toString() {
        return this.nombreCompleto();
    }
}

/**
 * si no se define un constructor
 * se define uno automaticamente
 */

let persona1 = new Persona('ramiro', 'arboleda');
let persona2 = new Persona('maria', 'martinez');
console.log(persona1);
console.log(persona1.nombre);
persona1.nombre = 'felipe';
console.log(persona1.nombre);
console.log(persona2);


//se debe definir la clase antes de usarla
//no aplica el hoisting - invocacion de metodos antes de usarlo

//herencia

class Empleado extends Persona {
    constructor(nombre, apellido, departamento) {
        //se debe invocar el contructor de la clase padre
        super(nombre, apellido);
        this._departamento = departamento;
    }

    get departamento() {
        return this._departamento;
    }

    set departamento(departamento) {
        this._departamento = departamento;
    }

    //sobreescritura del metodo
    nombreCompleto() {
        //return this._nombre + ' ' + this._apellido + ' ' + this._departamento;
        return super.nombreCompleto() + ' ' + this._departamento;
    }
}

let pruebaEmp = new Empleado('nuevo', 'empleado', 'rrhh');
console.log(pruebaEmp);
console.log(pruebaEmp.departamento);
console.log(pruebaEmp.nombreCompleto());

//clase object
/**
 * object es la clase padre de todos los objetos en js
 */

//se sobreescribe el metodo toString en la clase Persona
console.log(pruebaEmp.toString());
//ejemplo de polimorfismo - se invoca el metodo toString de la instancia de la
//clase hija