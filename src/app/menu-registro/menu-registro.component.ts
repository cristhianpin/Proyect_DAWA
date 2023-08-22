import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrarclienteService } from '../services/registrarcliente.service';
import { getUniqueID } from 'src/app/services/custom.functions';
import { Clientes } from '../models/cliente.model';



@Component({
  selector: 'app-menu-registro',
  templateUrl: './menu-registro.component.html',
  styleUrls: ['./menu-registro.component.css']
})
export class MenuRegistroComponent {
  formulario ={
    id_cliente: '',
    nombre: '',
    correo: '',
    clave: '',
    telefono: '',
    direccion: '',
  
  }
 // constructor( private router: Router) {
    constructor( private registraclienteService : RegistrarclienteService){

  }
    registroExitoso = false;
    registroFallido = false;

    registrarCliente(event: Event){
      event.preventDefault();
      const id_cliente = getUniqueID();
      const nombre = (document.getElementById('nombre') as HTMLInputElement).value;
      const correo = (document.getElementById('correo') as HTMLInputElement).value;
      const clave = (document.getElementById('clave') as HTMLInputElement).value;
      const telefono = (document.getElementById('telefono') as HTMLInputElement).value;
      const direccion = (document.getElementById('direccion') as HTMLInputElement).value;
      const id_usuario = '2';

      const nuevoregistro: Clientes = {
        id_cliente: id_cliente,
        nombre: nombre,
        correo: correo,
        clave: clave,
        telefono: telefono,
        direccion: direccion,
        id_usuario: id_usuario

      };

      this.registraclienteService.agregarCliente(nuevoregistro)
        .subscribe(response =>{
          this.registroExitoso = true;
        this.registroFallido = false;
        console.log('registrado:', response);
        console.log('data ->', nuevoregistro);

        })

    }

 menu() {
    
   //this.router.navigate(['../home/']); // Navegar a la página de inicio
 }
}
