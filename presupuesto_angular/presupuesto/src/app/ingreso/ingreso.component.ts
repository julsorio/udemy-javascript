import { Component, Input, OnInit } from '@angular/core';
import { Ingreso } from './ingreso.model';
import { IngresoService } from './ingreso.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ingreso',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ingreso.component.html',
  styleUrl: './ingreso.component.css'
})
export class IngresoComponent implements OnInit {
  ingresos: Ingreso[] = [];

  constructor(private ingresoService: IngresoService) {

  }
  
  ngOnInit(): void {
    this.ingresos = this.ingresoService.ingresos;
  }
  
  /**
   * 
   * @param item 
   */
  eliminarRegistro(item: Ingreso): void {
    this.ingresoService.eliminarIngreso(item);
  }
  
}
