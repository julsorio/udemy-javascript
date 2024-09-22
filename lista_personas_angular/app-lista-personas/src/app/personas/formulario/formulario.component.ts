import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Persona } from '../../persona.model';
import { FormsModule } from '@angular/forms';
import { LoggingService } from '../../LoggingService.service';
import { PersonasService } from '../../personas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { map } from 'rxjs';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
  //providers: [LoggingService] - esta es una forma de declarar el servicio a nivel de componente
})
export class FormularioComponent implements OnInit {
  //@Output() personaCreada = new EventEmitter<Persona>();
  /**
   * el decorador recibe el nombre de la referencia local
  */
  @ViewChild('telefonoInput') telefonoInput: ElementRef;

  nombreInput: string = '';
  apellidoInput: string = '';
  indice: number;
  modoEdicion: number;
  persona: Persona;

  /**
   * inyeccion de dependencias
   * @param loggingService 
   */
  constructor(/*private loggingService: LoggingService,*/ private personasDataService: PersonasService, private router: Router, private route: ActivatedRoute) {
    this.personasDataService.eventoIndice.subscribe((indice: number) => {
      alert(`indice seleccionado: ${indice}`);
    });
  }

  ngOnInit() {
    this.indice = this.route.snapshot.params['id'];
    this.modoEdicion = +this.route.snapshot.queryParams['modoEdicion']; // con el + se realiza la conversion
    //let persona: Persona;
    //if(this.indice) {
    if(this.modoEdicion != null && this.modoEdicion === 1) {
      //persona = this.personasDataService.encontrarPersona(this.indice);
      //console.log(`persona ${persona}`);
      //this.nombreInput = persona.getNombre();
      //this.apellidoInput = persona.getApellido();

      this.personasDataService.encontrarPersona(this.indice).pipe(map(data => {
        console.log("personas 1 " + data);
        this.persona = data;
        this.nombreInput = this.persona.nombre;
        this.apellidoInput = this.persona.apellido;
      })).subscribe((tdata) => {
        console.log("personas 1 " + tdata);
        
      })
    }
    
    
  }


  agregarPersona(): void {
    //this.loggingService.mostrarMensajeConsola("agregarPersona");
    let obj = new Persona(this.nombreInput, this.apellidoInput);
    //this.personaCreada.emit(obj); ya no sera necesario emitir los eventos desde el componente formulario
    this.personasDataService.personaAgregada(obj);
    
    //navegar a la lista de personas
    this.router.navigate(['']);
  }

  onGuardarPersona(): void {
    //this.loggingService.mostrarMensajeConsola("agregarPersona");
    let obj = new Persona(this.nombreInput, this.apellidoInput);
    //this.personaCreada.emit(obj); ya no sera necesario emitir los eventos desde el componente formulario
    //this.personasDataService.personaAgregada(obj);

    //if(this.indice) {
    if(this.modoEdicion === 1) {
      //el indice existe, se edita
      this.personasDataService.modificarPersona(obj, this.indice);
    } else {
      this.personasDataService.personaAgregada(obj);
    }

    //navegar a la lista de personas
    this.router.navigate(['']);
  }

  agregarPersona2(edadInput: HTMLInputElement, emailInput: HTMLInputElement): void {
    /*this.loggingService.mostrarMensajeConsola("agregarPersona2");
    this.loggingService.mostrarMensajeConsola(`se extraen los valores de los campos edad y email: ${edadInput.value} - ${emailInput.value}`);
    this.loggingService.mostrarMensajeConsola(`se extrae el numero de telefono: ${this.telefonoInput.nativeElement.value}`); */
    console.log("agregarPersona2");
    console.log(`se extraen los valores de los campos edad y email: ${edadInput.value} - ${emailInput.value}`);
    console.log(`se extrae el numero de telefono: ${this.telefonoInput.nativeElement.value}`);
  }

  eliminarPesona(): void {
    if(this.indice != null) {
      this.personasDataService.eliminarPersona(this.indice);

      //navegar a la lista de personas
      this.router.navigate(['']);
    }
  }
}
