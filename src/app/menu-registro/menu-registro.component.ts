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
      idcliente: '',
      nombre: '',
      correo: '',
      clave: '',
      telefono: '',
      direccion: '',
    
    };
    //constructor( private router: Router) {
      constructor(  private router: Router, private registraclienteService : RegistrarclienteService){
  
    };
      registroExitoso = false;
      registroFallido = false;
  
      registrarCliente(event: Event){
        event.preventDefault();
        const idcliente = getUniqueID();
        const nombre = (document.getElementById('f_nombre') as HTMLInputElement).value;
        const correo = (document.getElementById('f_correo') as HTMLInputElement).value;
        const clave = (document.getElementById('f_clave') as HTMLInputElement).value;
        const telefono = (document.getElementById('f_telefono') as HTMLInputElement).value;
        const direccion = (document.getElementById('f_direccion') as HTMLInputElement).value;
        //const id_usuario = '2';
  
        const nuevoregistro: Clientes = {
          idcliente: idcliente,
          nombre: nombre,
          correo: correo,
          clave: clave,
          telefono: telefono,
          direccion: direccion,
          //id_usuario: id_usuario
  
        };
  
        this.registraclienteService.postDatos(nuevoregistro)
          .subscribe(response =>{
            this.registroExitoso = true;
          this.registroFallido = false;
          console.log('registrado:', response);
          console.log('data ->', nuevoregistro);
  
          }

          ,error => {
            this.registroExitoso = false;
            this.registroFallido = true;
            console.error('Error al registrar el cliente:', error);
            console.log("cliente -> ", nuevoregistro )
        
        })
  
      }
  
 //menu() {
    
  // this.router.navigate(['../home/']); // Navegar a la página de inicio
 //}
}
