import { Injectable } from '@angular/core';
import { Cliente } from './../models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private clientes: Cliente[] = [
    new Cliente(1, 'John', 'Doe', '123456789', 'john@example.com', 'johndoe', 'password1'),
    new Cliente(2, 'Jane', 'Smith', '987654321', 'jane@example.com', 'janesmith', 'password2'),
    // Agrega más clientes aquí según sea necesario
  ];

  constructor() { }

  obtenerClientes(): Cliente[] {
    return this.clientes;
  }

  obtenerClientePorId(id: number): Cliente | undefined {
    return this.clientes.find(cliente => cliente.id === id);
  }
}
