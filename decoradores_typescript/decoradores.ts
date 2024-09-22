/**
 * se utilizan con angular
 * 
 * se aplica a clases, metodos y atributos de la clase
 */

function Saludar(target: Function): void {
    target.prototype.saludos = function():void {
        console.log("Saludos desde el decorador");
    }
}

@Saludar
class Hola {
    constructor() {}
}

let prueba = new Hola();
prueba.saludos();