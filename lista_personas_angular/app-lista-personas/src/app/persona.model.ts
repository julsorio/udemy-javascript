export class Persona {
    nombre: string = '';
    apellido: string = '';
    id: number = 0;

    static contador = 0;

    constructor(nombre: string, apellido: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.id = ++Persona.contador;
    }

    getNombre(): string {
        return this.nombre;
    }

    setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    getApellido(): string {
        return this.apellido;
    }

    setApellido(apellido: string): void {
        this.apellido = apellido;
    }

    toString(): string {
        return this.getNombre() + ' ' + this.getApellido();
    }
}