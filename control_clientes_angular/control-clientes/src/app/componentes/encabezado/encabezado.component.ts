import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from '../../servicios/login.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-encabezado',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './encabezado.component.html',
  styleUrl: './encabezado.component.css'
})
export class EncabezadoComponent implements OnInit {

  isLoggedIn: boolean;
  loggedInUser: string;

  constructor(private loginService: LoginService, private router: Router) {
    
  }
  
  ngOnInit(): void {
    this.loginService.getAuth().subscribe((auth: any) => {
      if(auth) {
        this.isLoggedIn = true;
        this.loggedInUser = auth.email;
      } else {
        this.isLoggedIn = false;
      }
    })
  }
}
