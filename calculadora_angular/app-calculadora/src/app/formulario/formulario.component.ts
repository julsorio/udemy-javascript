import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  @Output() resultadoOperacion = new EventEmitter<number>(); //se va a propagar hasta el componente padre

  operandoA: number = 0;
  operandoB: number = 0;
  resultado: number = 0;

  realizarSuma(): void {
    this.resultado = this.operandoA + this.operandoB;
    this.resultadoOperacion.emit(this.resultado);
  }
}
