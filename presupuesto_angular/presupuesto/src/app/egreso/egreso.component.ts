import { Component, Input, OnInit } from '@angular/core';
import { Egreso } from './egreso.model';
import { EgresoService } from './egreso.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-egreso',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './egreso.component.html',
  styleUrl: './egreso.component.css'
})
export class EgresoComponent implements OnInit {
   egresos: Egreso[] = [];
   @Input() ingresoTotal: number;

   constructor(private egresoService: EgresoService) {

   }

   ngOnInit(): void {
    this.egresos = this.egresoService.egresos;
  }

  /**
   * metodo para eliminar un registro del arreglo de egresos
   * @param item 
   */
  eliminarRegistro(item: Egreso): void {
    this.egresoService.eliminarEgreso(item);
  }

  /**
   * metodo que calcula el porcentaje que se muestra en cada item
   * del arreglo de egresos
   */
  calcularPorcentaje(egreso: Egreso): number {
    return egreso.valor / this.ingresoTotal;
  }
   
}
