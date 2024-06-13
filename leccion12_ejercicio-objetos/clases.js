/**
 * clases sistema de venta
 */

class Orden {
    static contadorOrdenes = 0;

    static get MAX_PRODUCTOS() {
        return 5;
    }

    constructor() {
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        //this._contadorProductosAgregados = 0;
    }

    get idOrden() {
        return this._idOrden;
    }

    agregarProducto(producto) {
        if(this._productos.length > Orden.MAX_PRODUCTOS) {
            console.log('no se pueden agregar mas productos');
        } else {
            this._productos.push(producto);
            /**
             * solucion mediante el indice
             */
            //this._productos[this._contadorProductosAgregados++] = producto;
        }
    }

    calcularTotal() {
        let totalVenta = 0;

        for(let producto of this._productos) {
            totalVenta += producto._precio;
        }

        return totalVenta;
    }

    mostrarOrden() {
        let productosOrden = '';
        for(let producto of this._productos) {
            productosOrden += '\n' + producto.toString() + '\n';
        }

        console.log(`Orden: ${this._idOrden} - Total: ${this.calcularTotal()} - Productos: ${productosOrden}`);
    }
}

class Producto {
    static contadorProductos = 0;

    constructor(nombre, precio) {
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }

    get idProducto() {
        return this._idProducto;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get precio() {
        return this._precio;
    }

    set precio(precio) {
        this._precio = precio;
    }

    toString() {
        return `idProducto: ${this._idProducto} - nombre: ${this._nombre} - precio: ${this._precio}`;
    }
}

let producto1 = new Producto('pantalon', 200);
let producto2 = new Producto('camisa', 80);
console.log(producto1.toString());
console.log(producto2.toString());

let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.mostrarOrden();

let producto3 = new Producto('medias', 5);
let producto4 = new Producto('zapatos', 70);

let orden2 = new Orden();
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto4);
orden2.mostrarOrden();
