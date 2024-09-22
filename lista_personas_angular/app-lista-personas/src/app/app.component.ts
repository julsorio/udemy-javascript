import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonaComponent } from './personas/persona/persona.component';
import { Persona } from './persona.model';
import { FormsModule } from '@angular/forms';
import { FormularioComponent } from './personas/formulario/formulario.component';
import { CommonModule } from '@angular/common';
import { PersonasService } from './personas.service';
import { LoggingService } from './LoggingService.service';
import { PersonasComponent } from './personas/personas.component';
import { HttpClient } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, PersonasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'app-lista-personas';
  
  //personas: Persona[] = [];

  /*
  constructor(private loggingService: LoggingService, private personasDataService: PersonasService) {

  }
  */

  ngOnInit(): void {
    //this.loggingService.mostrarMensajeConsola("metodo OnInit");
    console.log("metodo OnInit app component");
   
  }
  
  /*ngOnInit(): void {
    //this.loggingService.mostrarMensajeConsola("metodo OnInit");
    console.log("metodo OnInit");
    this.personas = this.personasDataService.personasData;
  }*/

  /**
   * este metodo se implementa en el servicio de PersonasService
   * @param persona 
   */
  /*personaAgregada(persona: Persona): void {
    this.personas.push(persona);
  }*/
  /*personaAgregada(persona: Persona): void {
    this.loggingService.mostrarMensajeConsola("se agrega persona al arreglo");
    this.personasDataService.personaAgregada(persona);
  }*/

}
