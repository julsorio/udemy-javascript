import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Persona } from "./persona.model";

@Injectable(
  {
    providedIn: 'root'
  }
)

export class DataService {


  constructor(private httpClient: HttpClient) {

  }

  /**
   * metodo para almacenar el arreglo de personas en 
   * la base de datos firebase
   * @param personas 
   */
  guardarPersonas(personas: Persona[]): void {
    console.log("guardar personas put");

    //this.httpClient.post('https://lista-personas-3d6de-default-rtdb.europe-west1.firebasedatabase.app/datos.json', personas).subscribe(
    this.httpClient.put('https://lista-personas-3d6de-default-rtdb.europe-west1.firebasedatabase.app/datos.json', personas).subscribe(
      {
        next:(response) => {
          console.log("response put guardarPersonas " + response);

        },
        error:(error) => {
          console.log(("error put guardarPersonas " + error))
        },
        complete:() => {
          console.log("complete put guardarPersonas");
        }
      }
      
    );
  }

  obtenerPersonas() {
    console.log("obtener personas get");
    //return this.httpClient.get<Persona[]>('https://lista-personas-3d6de-default-rtdb.europe-west1.firebasedatabase.app/datos.json');
    return this.httpClient.get<Persona[]>('https://lista-personas-3d6de-default-rtdb.europe-west1.firebasedatabase.app/datos.json');
  }
  
  obtenerPersona(indice: number) {
    console.log(`obtener persona indice ${indice}`);
    //const params = new HttpParams().set('indice', indice);
    let url: string = '';
    url = 'https://lista-personas-3d6de-default-rtdb.europe-west1.firebasedatabase.app/datos/' + indice + '.json';
    return this.httpClient.get<Persona>(url);
  }
  
  modificarPersona(persona: Persona, indice: number): void {
    console.log(`modificar persona ${persona} indice ${indice}`);
    let url: string = '';
    url = 'https://lista-personas-3d6de-default-rtdb.europe-west1.firebasedatabase.app/datos/' + indice + '.json';

    this.httpClient.put(url, persona).subscribe(
      {
        next:(response) => {
          console.log("response put modificar persona " + response);

        },
        error:(error) => {
          console.log(("error put modificar persona " + error))
        },
        complete:() => {
          console.log("complete put modificar persona");
        }
      }
      
    );

  }

  eliminarPersona(indice: number): void {
    console.log(`eliminar persona en el indice ${indice}`);
    let url: string = '';
    url = 'https://lista-personas-3d6de-default-rtdb.europe-west1.firebasedatabase.app/datos/' + indice + '.json';
    this.httpClient.delete(url).subscribe({
      next:(response) => {
        console.log("response delete eliminar persona " + response);

      },
      error:(error) => {
        console.log("error delete eliminar persona " + error);
      },
      complete:() => {
        console.log("complete delete eliminar persona");

      }
    })
  }
}