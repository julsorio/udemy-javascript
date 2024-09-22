import { ApplicationModule, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

@Component({
    selector: 'app-personas',
    templateUrl: './personas.component.html',
    styleUrl: './personas.component.css'
})
export class PersonasComponent {
    deshabilitarBoton = false;
    mensaje: string = 'No se ha agregado ninguna persona';
    titulo: string = '';
    titulo2: string = 'valor inicial';
    mostrarMensaje = false;

    agregarPersona(): void {
        this.mensaje = 'Persona agregada';
        this.mostrarMensaje = true;
    }

    modificarTitulo(event: Event): void {
        this.titulo = (<HTMLInputElement>event.target).value;
    }
}