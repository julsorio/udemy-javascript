export class Persona {
    nombre: string = '';
    apellido: string = '';

/**
 * sintaxis simplificada
 * constructor(public nombre: string, public apellido: string) {
 * }
 */

    /**
     * 
     * @param nombre 
     * @param apellido 
     */
    constructor(nombre: string, apellido: string) {
        this.nombre = nombre;
        this.apellido = apellido;
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
}