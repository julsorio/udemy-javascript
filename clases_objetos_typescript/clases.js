"use strict";
class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
    getNombre() {
        return this.nombre;
    }
    static metodoStatic() {
        return 10;
    }
}
let persona = new Persona("francisco");
console.log(persona.getNombre());
console.log(Persona.metodoStatic());
