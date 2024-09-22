import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";

@Injectable({
    providedIn: 'root'
})

export class LoginService {
    token: string;

    constructor(private angularFireAuth: AngularFireAuth) {

    }

    login(email: string, password: string) {
        this.angularFireAuth.signInWithEmailAndPassword(email, password)
        .then(response => {
                console.log("ok", response);
            })
        .catch(error => {
            console.log("not ok", error);
        })
    }
}