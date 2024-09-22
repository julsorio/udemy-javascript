import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ResultadoComponent } from './resultado/resultado.component';
import { FormularioComponent } from './formulario/formulario.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, FormularioComponent, ResultadoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @Output() resultadoAMostrar = new EventEmitter<number>();

  title = 'Aplicacion de calculadora';
  valorRecibido: number = 0;

  testRecibeValor(valorEmitido: number) {
    console.log(`recibe el valor: ${valorEmitido} desde el componente de formulario`);
    this.valorRecibido = valorEmitido;
  }
  
 

}
