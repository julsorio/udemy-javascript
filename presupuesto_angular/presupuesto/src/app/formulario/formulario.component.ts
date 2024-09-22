import { Component } from '@angular/core';
import { IngresoService } from '../ingreso/ingreso.service';
import { EgresoService } from '../egreso/egreso.service';
import { Ingreso } from '../ingreso/ingreso.model';
import { Egreso } from '../egreso/egreso.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  tipo: string = 'ingreso';
  descripcionInput: string = '';
  valorInput: number = 0;

  constructor(private ingresoService: IngresoService, private egresoService: EgresoService) {

  }

  tipoOperacion(event: any) {
    this.tipo = event.target.value;
  }

  agregarOperacion() {
   if(this.tipo === "ingreso") {
    this.ingresoService.ingresos.push(new Ingreso(this.descripcionInput, this.valorInput));
  } else {
    this.egresoService.egresos.push(new Egreso(this.descripcionInput, this.valorInput));
   }

  }
}
