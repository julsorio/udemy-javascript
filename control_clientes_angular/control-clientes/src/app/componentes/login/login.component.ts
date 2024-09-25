import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../servicios/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email: string;
  password: string;

  constructor(private router: Router, private loginService: LoginService) {
    
  }

  login(): void {
    this.loginService.login(this.email, this.password).then( resultado => {
      this.router.navigate(['/'])
    })
    .catch(error => {
      console.log("Error al realizar login " + error)
    })
  }
}
