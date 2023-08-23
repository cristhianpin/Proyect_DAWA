import { Component } from '@angular/core';
import { Clientes } from '../../models/cliente.model';
import { RegistrarclienteService } from '../../services/registrarcliente.service';


@Component({
  selector: 'app-vistacliente',
  templateUrl: './vistacliente.component.html',
  styleUrls: ['./vistacliente.component.css']
})
export class VistaclienteComponent {
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
