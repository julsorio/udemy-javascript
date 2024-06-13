/**
 * clase Producto
 */
class Producto {

    static contadorProductos = 0;

    constructor() {

    }
    
    constructor(nombre, precio) {
        this._nombre = nombre;
        this._precio = precio;
        Producto.contadorProductos ++;
    }

    getIdProducto() {
        return this.idProducto;
    }

    getNombre() {
        return this._nombre;
    }

    setNombre(nombre) {
        this._nombre = nombre;
    }

    getPrecio() {
        return this._precio;
    }

    setPrecio(precio) {
        this._precio = precio;
    }

    toString() {
        return `${this._idProducto} - ${this._nombre} - ${this._precio}`;
    }
}