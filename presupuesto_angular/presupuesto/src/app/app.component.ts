import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { FormularioComponent } from './formulario/formulario.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { EgresoComponent } from './egreso/egreso.component';
import { CommonModule } from '@angular/common';
import { Ingreso } from './ingreso/ingreso.model';
import { Egreso } from './egreso/egreso.model';
import { IngresoService } from './ingreso/ingreso.service';
import { EgresoService } from './egreso/egreso.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EncabezadoComponent, FormularioComponent, IngresoComponent, EgresoComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'presupuesto';
  
  presupuestoTotal: number = 0;
  arregloIngresos: Ingreso[] = [];
  arregloEgresos: Egreso[] = [];

  constructor(private ingresoService: IngresoService, private egresoService: EgresoService) {
    this.arregloIngresos = ingresoService.ingresos;
    this.arregloEgresos = egresoService.egresos;
  }

  /**
   * el ingreso total es la sumatoria de los ingresos
   * @returns ingreso total
   */
  getIngresoTotal(): number {
    let ingresoTotal: number = 0;

    this.arregloIngresos.forEach(element => {
      ingresoTotal += element.valor;
    });

    return ingresoTotal;
  }

  /**
   * el egreso total es la sumatoria de los egresos
   * @returns egreso total
   */
  getEgresoTotal(): number {
    let egresoTotal: number = 0;

    this.arregloEgresos.forEach(element => {
      egresoTotal += element.valor;
    });

    return egresoTotal;
  }

  /**
   * division entre egreso total e ingreso total
   * @returns porcentaje
   */
  getPorcentajeTotal(): number {
    return this.getEgresoTotal() / this.getIngresoTotal();
  }

  /**
   * 
   * @returns presupuesto total
   */
  getPresupuestoTotal(): number {
    return this.getIngresoTotal() - this.getEgresoTotal();
  }

}
