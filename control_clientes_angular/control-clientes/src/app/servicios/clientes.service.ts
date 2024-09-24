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

    getClienteById(id: string): Observable<Cliente> {
        this.clienteDoc = this.database.doc<Cliente>(`clientes/${id}`);
        this.cliente = this.clienteDoc.snapshotChanges().pipe(
            map(accion => {
                if(accion.payload.exists === false) {
                    return null as any;
                } else {
                    const datosCliente = accion.payload.data() as Cliente;
                    datosCliente.id = accion.payload.id;

                    return datosCliente;
                }
            })
        );

        return this.cliente;
    }
}