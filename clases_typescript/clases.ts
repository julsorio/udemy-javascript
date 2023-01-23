class Persona {
    private nombre:string;

    constructor (nombre:string) {
        this.nombre = nombre;
    }

    getNombre():string {
        return this.nombre;
    }

    static metodoStatic():number {
        return 10;
    }
}

let persona = new Persona("francisco");
console.log(persona.getNombre());
console.log(Persona.metodoStatic());