import { Injectable } from '@angular/core';
import { User } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private authService: AngularFireAuth) { }

  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.authService.signInWithEmailAndPassword(email, password)
      .then(datos => resolve(datos),
            error => reject(error)
      )
    })
  }

  getAuth()   {
   return this.authService.authState;
  }

  logout() {
    this.authService.signOut();
  }

  registro(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.authService.createUserWithEmailAndPassword(email, password)
      .then(datos => resolve(datos), error => reject(error)
        
      )
    })
  }
}
