import { Component } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  /*template: `<p>prueba de codigo html en linea dentro del componente</p>`,*/
  styleUrl: './persona.component.css'
})
export class PersonaComponent {
  nombre: string = 'Felipe';
  apellido: string = 'Gutierrez';
  private edad: number = 28;
  personas: Persona[] = [];

  nombreInput: string = '';
  apellidoInput: string = '';

  getEdad(): number {
    return this.edad;
  }

  agregarPersona() {
    this.personas.push(new Persona(this.nombreInput, this.apellidoInput));
  }
}
