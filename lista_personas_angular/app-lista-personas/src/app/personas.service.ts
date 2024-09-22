import { EventEmitter, Injectable } from "@angular/core";
import { Persona } from "./persona.model";
import { LoggingService } from "./LoggingService.service";
import { DataService } from "./data.service";
import { Observable, map } from "rxjs";

@Injectable({
    providedIn: 'root'
  })

export class PersonasService {
    //personasData: Persona[] = [new Persona('Mario', 'Lopez'), new Persona('Fabio', 'Gutierrez')];
    personasData: Persona[] = [];
    persona: Persona;

    eventoIndice = new EventEmitter<number>();

    constructor(private loggingService: LoggingService, private dataService: DataService) {

    }

    personaAgregada(persona: Persona): void {
        this.loggingService.mostrarMensajeConsola("se inyecta el servicio de logging en el servicio de persona");
        this.loggingService.mostrarMensajeConsola(`persona ${persona.getNombre()}  ${persona.getApellido()}`);

        if(this.personasData == null) {
          this.personasData = [];
        }

        this.personasData.push(persona);

        //se almacena el arreglo en la bd
        this.dataService.guardarPersonas(this.personasData);
    }

    encontrarPersona(indice: number): Observable<Persona> {
      this.loggingService.mostrarMensajeConsola(`se retorna la persona del indice ${indice}`);
      console.log("encontrarPersona" + this.personasData)

      //let persona: Persona = this.personasData[indice];
      /*this.dataService.obtenerPersona(indice).subscribe((data: Persona) => {
        console.log(`obtener persona ${data}`);
        this.persona = data;
      });

      return this.persona;*/

      return this.dataService.obtenerPersona(indice);
    }

    obtenerPersonas(): Observable<Persona[]> {
      //return this.dataService.obtenerPersonas();

      /*this.dataService.obtenerPersonas().pipe(
        map(
         data => {
            this.personasData = data;
          }
         
        )
      ).subscribe(
        {
          next:(response) => {
            console.log("response obtenerPersonas " + response);
    
          },
          error:(error) => {
            console.log(("error obtenerPersonas " + error))
          },
          complete:() => {
            console.log("complete obtenerPersonas");
            console.log(` personasData ${this.personasData.length}`);
          }
        }
      )*/
      return this.dataService.obtenerPersonas();
      
    }

    setPersonas(personas: Persona[]) {
      this.personasData = personas;
    }

    getPersonas(): Persona[] {
      return this.personasData;
    }

    modificarPersona(persona: Persona, indice: number): void {
      this.loggingService.mostrarMensajeConsola(`se modifica la persona ${persona} en el indice ${indice}`);
      //this.personasData[indice] = persona;
      let obj = this.personasData[indice];
      //obj.setApellido(persona.getApellido());
      //obj.setNombre(persona.getNombre());
      this.dataService.modificarPersona(persona, indice);
    }
    
    eliminarPersona(indice: number): void {
      this.loggingService.mostrarMensajeConsola(`se elimina la persona en el indice ${indice}`);
      this.personasData.splice(indice, 1);
      this.dataService.eliminarPersona(indice);
    }
}

