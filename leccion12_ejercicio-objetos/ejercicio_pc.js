/**
 * clases ejercicios mundo pc
 */
class DispositivoEntrada {
    constructor(tipoEntrada, marca) {
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get tipoEntrada() {
        return this._tipoEntrada;
    }

    set tipoEntrada(tipoEntrada) {
        this._tipoEntrada = tipoEntrada
    }

    get marca() {
        return this._marca;
    }

    set marca(marca) {
        this._marca = marca;
    }
}

class Raton extends DispositivoEntrada {
    static contadorRatones = 0;

    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }

    toString() {
        return `{ idRaton: ${this._idRaton} - tipo Entrada: ${this._tipoEntrada} - marca: ${this._marca} }`;
    }
}

let pruebaRaton = new Raton('USB', 'HP');
console.log(pruebaRaton.toString());
let pruebaRaton2 = new Raton('bluetooth', 'dell');
console.log(pruebaRaton2.toString());

class Teclado extends DispositivoEntrada {
    static contadorTeclados = 0;

    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }

    toString() {
        return `{ idTeclado: ${this._idTeclado} - tipo Entrada: ${this._tipoEntrada} - marca: ${this._marca} }`;
    }
}

let pruebaTeclado = new Teclado('USB', 'logitec');
console.log(pruebaTeclado.toString());

class Monitor {
    static contadorMonitores = 0;

    constructor(marca, tamano) {
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamano = tamano;
    }

    get idMonitor() {
        return this._idMonitor;
    }

    get marca() {
        return this._marca;
    }

    set marca(marca) {
        this._marca = marca;
    }

    get tamano() {
        return this._tamano;
    }

    set tamano(tamano) {
        this._tamano = tamano;
    }

    toString() {
        return `{ idMonitor: ${this._idMonitor} - marca: ${this._marca} - tamano: ${this._tamano} }`;
    }
}

let pruebaMonitor = new Monitor('msi', 23);
console.log(pruebaMonitor.toString());

class Computadora {
    static contadorComputadoras = 0;

    constructor(nombre, monitor, teclado, raton) {
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
    }

    get idComputadora() {
        return this._idComputadora;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get monitor() {
        return this._monitor;
    }

    set monitor(monitor) {
        this._monitor = monitor;
    }

    get teclado() {
        return this._teclado;
    }

    set teclado(teclado) {
        this._teclado = teclado;
    }

    get raton() {
        return this._raton;
    }

    set raton(raton) {
        this._raton = raton;
    }

    toString() {
        return `COMPUTADORA {
            idComputadora: ${this._idComputadora} - nombre: ${this._nombre} - 
            MONITOR: ${this._monitor} - 
            TECLADO: ${this._teclado} - 
            RATON: ${this._raton}
        }`;
    }
}

let pruebaComputadora = new Computadora('lenovo', pruebaMonitor, pruebaTeclado, pruebaRaton);
console.log(`${pruebaComputadora}`);

class Orden {
    static contadorOrdenes = 0;

    constructor() {
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }

    get idOrden() {
        return this._idOrden;
    }

    get computadoras() {
        let computadoras = '';

        for(let obj of this._computadoras) {
            computadoras += `${obj}`;
        }

        return computadoras;
    }

    set computadoras(computadoras) {
        this._computadoras = computadoras;
    }

    toString() {
        return this.mostrarOrden();
    }

    agregarComputadora(computadora) {
        this._computadoras.push(computadora);
    }

    mostrarOrden() {
        return `ORDEN {
            idOrden: ${this._idOrden} - 
            COMPUTADORAS: ${this.computadoras}
        }`;
    }
}

let pruebaOrden = new Orden();
pruebaOrden.agregarComputadora(pruebaComputadora);
console.log(pruebaOrden.toString());