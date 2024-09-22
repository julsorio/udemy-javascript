import { Component, OnInit, ViewChild } from '@angular/core';
import { ClientesService } from '../../servicios/clientes.service';
import { Cliente } from '../../modelo/cliente.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[];

  nombreInput: string = '';
  apellidoInput: string = '';
  emailInput: string = '';
  saldoInput: number = 0;

  cliente: Cliente = {
    nombre: '',
    apellido: '',
    email: '',
    saldo: 0,
    id: ''
  }
  
  //@ViewChild("clienteForm") clienteForm: NgForm;
  //clienteForm: FormGroup;
  clienteForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private clienteService: ClientesService) {
    this.clienteForm = this.formBuilder.group({
      /**
       * nombre: new FormControl('', [Validators.required, Validators.minLength(2)]),
      apellido: new FormControl('', [Validators.required, Validators.minLength(2)]),
      email: new FormControl('', [Validators.required /*, Validators.pattern('^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})*$')]),
      saldo: new FormControl(0, Validators.required)
      **/
       nombre: ['', [Validators.required, Validators.minLength(2)]],
       apellido: ['', [Validators.required, Validators.minLength(2)]],
       email: ['', [Validators.required, Validators.email]],
       saldo: [0, [Validators.required]]

    })
  }
  
  ngOnInit(): void {
    this.clienteService.getClientes().subscribe(
      clientes => {
        this.clientes = clientes;
      }
    )
  }

  getSaldoTotal(): number {
    //se recorre la lista de clientes para calcular el saldo total
    let saldoTotal: number = 0;
    if(this.clientes != null) {
      this.clientes.forEach(element => {
        saldoTotal += element.saldo;
      });
    }
    
    return saldoTotal;
  }

  getCantidadClientes(): number {
    //se retorna la cantidad de clientes en el arreglo
    let cantidadClientes = 0;
    if(this.clientes != null) {
      cantidadClientes = this.clientes.length;
    }

    return cantidadClientes;
  }

  /*agregarCliente(nombre: HTMLInputElement, apellido: HTMLInputElement, email: HTMLInputElement, saldo: HTMLInputElement): void {
    console.log(`cliente ${nombre} ${apellido} ${email} ${saldo}`);

  }
   agregarCliente({value, valid}: {value: Cliente, valid: boolean}): void {
    if(!valid) {
      console.log("no se ha rellenado el formulario");
    } else {
      //se guarda el cliente
      this.clienteService.guardarCliente(value);
    }
   }*/

   onSubmit() {
    console.log("on submit");

    

   }
}
