import { Component, OnInit } from '@angular/core';
import { PersonaComponent } from './persona/persona.component';
import { FormularioComponent } from './formulario/formulario.component';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { DataService } from '../data.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-personas',
  standalone: true,
  imports: [PersonaComponent, FormularioComponent, FormsModule, CommonModule, RouterModule],
  templateUrl: './personas.component.html',
  styleUrl: './personas.component.css'
})
export class PersonasComponent implements OnInit {
  personas: Persona[] = [];

  constructor(private personasDataService: PersonasService, private router: Router, private dataService: DataService) {

  }

  ngOnInit(): void {
    //this.loggingService.mostrarMensajeConsola("metodo OnInit");
    console.log("metodo OnInit personas");
    //this.personas = this.personasDataService.personasData;
    //se obtiene el arreglo de la base de datos
    this.personasDataService.obtenerPersonas().pipe(map(data => {
      console.log("arreglo personas 1 " + data);
      this.personas = data;
      
    })).subscribe((tdata) => {
      console.log("arreglo personas 2 " + tdata);
      
    });
    
  }

  agregarPersona() {
    this.router.navigate(['personas/agregar']);
  }
}
