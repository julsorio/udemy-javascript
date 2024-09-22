import { Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
  })

export class LoggingService {
    mostrarMensajeConsola(mensaje: string) {
        console.log(`LoggingService - mostrarMensajeConsola ${mensaje}`);
    }
}