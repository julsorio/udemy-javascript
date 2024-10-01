import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreDocument } from "@angular/fire/compat/firestore";
import { Configuracion } from "../modelo/configuracion.model";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class ConfiguracionService {
    configuracionDoc: AngularFirestoreDocument<Configuracion>;
    configuracion: Observable<Configuracion | undefined>;

    //id unico de la coleccion
    id = '1';

    constructor(private database: AngularFirestore) {

    }

    getConfiguracion(): Observable<Configuracion | undefined> {
        this.configuracionDoc = this.database.doc<Configuracion>(`configuracion/${this.id}`);
        this.configuracion = this.configuracionDoc.valueChanges();

        return this.configuracion;
    }

    modificarConfiguracion(configuracion: Configuracion) {
        this.configuracionDoc = this.database.doc<Configuracion>(`configuracion/${this.id}`);
        this.configuracionDoc.update(configuracion);
    }
}