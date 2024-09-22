import { Injectable } from "@angular/core";
import { Egreso } from "./egreso.model";

@Injectable({
    providedIn: 'root'
  })

export class EgresoService {
    egresos: Egreso[] = [
      new Egreso("egreso 1", 100), 
      new Egreso("egreso 2", 68)
    ];

    agregarEgreso(egreso: Egreso): void {
      console.log(`nuevo egreso ${egreso.toString()}`);
      this.egresos.push(egreso);
    }

    /**
     * metodo para eliminar un ingreso del arreglo
     * @param egreso a eliminar
     */
    eliminarEgreso(egreso: Egreso): void {
      const indice: number = this.egresos.indexOf(egreso);
      this.egresos.splice(indice, 1);
    }
}