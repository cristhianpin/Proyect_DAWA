import { Component } from '@angular/core';
import { Clientes } from '../models/cliente.model';
import { RegistrarclienteService } from '../services/registrarcliente.service';

@Component({
  selector: 'app-vista-admin',
  templateUrl: './vista-admin.component.html',
  styleUrls: ['./vista-admin.component.css']
})
export class VistaAdminComponent {

  cliente!: Clientes[];
  constructor(private registrarcliente: RegistrarclienteService){
    this.obtenerclientes();
  }

  obtenerclientes(){

    this.registrarcliente.getDatos().subscribe(data =>{
      this.cliente = data;
      console.log(this.cliente)
    })
  }

}
