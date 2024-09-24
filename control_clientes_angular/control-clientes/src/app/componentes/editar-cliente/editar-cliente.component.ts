import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../modelo/cliente.model';
import { ClientesService } from '../../servicios/clientes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editar-cliente',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './editar-cliente.component.html',
  styleUrl: './editar-cliente.component.css'
})
export class EditarClienteComponent implements OnInit {

  id: string;
  clienteForm: FormGroup;

  cliente: Cliente = {
    nombre: '',
    apellido: '',
    email: '',
    saldo: 0,
    id: ''
  }

  constructor(private clienteServicio: ClientesService, private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.clienteForm = this.formBuilder.group({
       nombre: ['', [Validators.required, Validators.minLength(2)]],
       apellido: ['', [Validators.required, Validators.minLength(2)]],
       email: ['', [Validators.required, Validators.email]],
       saldo: [0, [Validators.required]]

    })

    this.clienteServicio.getClienteById(this.id).subscribe(cliente => {
      this.cliente = cliente;

      this.clienteForm.setValue({
        nombre: this.cliente.nombre,
        apellido: this.cliente.apellido,
        email: this.cliente.email,
        saldo: this.cliente.saldo
      })
  
    });

        
  }

  onSubmit(): void {
    console.log("submit edit form");
  }

}
