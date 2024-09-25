import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../modelo/cliente.model';
import { ClientesService } from '../../servicios/clientes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
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

  cliente: Cliente = {
    nombre: '',
    apellido: '',
    email: '',
    saldo: 0,
    id: ''
  }

  constructor(private clienteServicio: ClientesService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.clienteServicio.getClienteById(this.id).subscribe(cliente => {
      this.cliente = cliente;
    });

  }

  onSubmit(clienteForm: NgForm): void {
    this.clienteServicio.modificarCliente(clienteForm.value);
    this.router.navigate(['/']);
  }

  eliminarCliente(): void {
    this.clienteServicio.eliminarCliente(this.cliente);
  }

}
