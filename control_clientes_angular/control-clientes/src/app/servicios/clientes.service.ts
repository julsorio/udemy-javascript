import { Injectable } from "@angular/core";
import { Cliente } from "../modelo/cliente.model";
import { AngularFirestore , AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { map, Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class ClientesService {
    coleccionClientes: AngularFirestoreCollection<Cliente>;
    clienteDoc: AngularFirestoreDocument<Cliente>;
    clientes: Observable<Cliente[]>;
    cliente: Observable<Cliente>;

    constructor(private database: AngularFirestore) {
        this.coleccionClientes = database.collection('clientes', ref => (
            ref.orderBy('nombre', 'asc')
        ));

    }

    getClientes(): Observable<Cliente[]> {
        this.clientes = this.coleccionClientes.snapshotChanges().pipe(
            map(cambios => {
                return cambios.map(accion => {
                    const datos = accion.payload.doc.data() as Cliente;
                    datos.id = accion.payload.doc.id;
                    return datos;
                })
            })
        );
        return this.clientes;
    }

    guardarCliente(cliente: Cliente): void {
        this.coleccionClientes.add(cliente);
    }
}