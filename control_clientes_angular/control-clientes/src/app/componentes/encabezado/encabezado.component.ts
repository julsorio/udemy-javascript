import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from '../../servicios/login.service';
import { CommonModule } from '@angular/common';
import { ConfiguracionService } from '../../servicios/configuracion.service';

@Component({
  selector: 'app-encabezado',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './encabezado.component.html',
  styleUrl: './encabezado.component.css'
})
export class EncabezadoComponent implements OnInit {

  isLoggedIn: boolean;
  loggedInUser: any;

  permitirRegistro: any;

  constructor(private loginService: LoginService, private router: Router, private configuracionService: ConfiguracionService) {
    
  }
  
  ngOnInit(): void {
    this.loginService.getAuth().subscribe(auth => {
      if(auth) {
        this.isLoggedIn = true;
        this.loggedInUser = auth.email;
      } else {
        this.isLoggedIn = false;
      }
    });

    this.configuracionService.getConfiguracion().subscribe(
      (configuracion) => {
        this.permitirRegistro = configuracion!.permitirRegistro;
      }
    )

  }

  logout(): void {
    this.loginService.logout();
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }
}
