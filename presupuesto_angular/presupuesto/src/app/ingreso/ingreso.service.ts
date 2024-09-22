import { Injectable } from "@angular/core";
import { Ingreso } from "./ingreso.model";

@Injectable({
    providedIn: 'root'
  })

export class IngresoService {
    ingresos: Ingreso[] = [
      new Ingreso("ingreso 1", 583),
      new Ingreso("ingreso 2", 483)
    ];

    agregarIngreso(ingreso: Ingreso): void {
      console.log(`nuevo ingreso ${ingreso.toString()}`);
      this.ingresos.push(ingreso);
    }

    /**
     * metodo para eliminar un ingreso de la lista
     * @param ingreso a eliminar del arreglo
     */
    eliminarIngreso(ingreso: Ingreso): void {
      let indice: number = this.ingresos.indexOf(ingreso);
      this.ingresos.splice(indice, 1);
    }
}