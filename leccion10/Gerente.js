class Empleado2 {
    constructor(nombre, sueldo) {
        this._nombre = nombre;
        this._sueldo = sueldo;
    }

    get nombre() {
        return this._nombre;
    }

    get sueldo() {
        return this._sueldo;
    }

    obtenerDetalles() {
       return `Empleado: Nombre ${this._nombre} , sueldo:  ${this._sueldo}`;
    }
}

class Gerente extends Empleado2 {
    constructor(nombre, sueldo, departamento) {
        super(nombre, sueldo);
        this._departamento = departamento;
    }

    obtenerDetalles() {
        return `Gerente: ${super.obtenerDetalles()} , departamento ${this._departamento}`;
    }
}



let empleSobreEscribe = new Empleado2('Pablo Aristizabal', 5000);
console.log(empleSobreEscribe.obtenerDetalles());

let gerenteSobreEscribe = new Gerente('Felipe Alvarez', 1000, 'Tecnologia');
console.log(gerenteSobreEscribe.obtenerDetalles());

//polimorfismo

let imprimir = (tipo) => {
    console.log(tipo.obtenerDetalles());

    if(tipo instanceof Gerente) {
        console.log("objeto tipo Empleado2");
    } else if(tipo instanceof Empleado2) {
        console.log("objeto tipo Gerente");
    } else if(tipo instanceof Object) {
        console.log("objeto tipo Object");
    }
}

imprimir(empleSobreEscribe);

imprimir(gerenteSobreEscribe);