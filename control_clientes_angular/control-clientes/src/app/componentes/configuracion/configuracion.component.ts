import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfiguracionService } from '../../servicios/configuracion.service';
import { Configuracion } from '../../modelo/configuracion.model';

@Component({
  selector: 'app-configuracion',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './configuracion.component.html',
  styleUrl: './configuracion.component.css'
})
export class ConfiguracionComponent {

  permitirRegistro: any = false;

  constructor(private router: Router, private configuracionService: ConfiguracionService) {
    this.configuracionService.getConfiguracion().subscribe(
      (configuracion) => {
        this.permitirRegistro = configuracion!.permitirRegistro;
      }
    )
  }

  guardarCambiosConfiguracion(): void {
    let configuracion = {permitirRegistro: this.permitirRegistro};
    this.configuracionService.modificarConfiguracion(configuracion);
    this.router.navigate(['/']);
  }
}
