import { Component } from '@angular/core';
import { Clientes } from '../../models/cliente.model';
import { RegistrarclienteService } from '../../services/registrarcliente.service';
import { getUniqueID } from 'src/app/services/custom.functions';


@Component({
  selector: 'app-vistacliente',
  templateUrl: './vistacliente.component.html',
  styleUrls: ['./vistacliente.component.css']
})
export class VistaclienteComponent {
  cliente!: Clientes[];

  formulario ={
    idcliente: '',
    nombre: '',
    correo: '',
    clave: '',
    telefono: '',
    direccion: '',
    //id_usuario: '',
  
  };

  constructor(private registrarcliente: RegistrarclienteService, private registraclienteService : RegistrarclienteService){
    this.obtenerclientes();
  }
    registroExitoso = false;
    registroFallido = false;

  obtenerclientes(){

    this.registrarcliente.getDatos().subscribe(data =>{
      this.cliente = data;
      console.log(this.cliente)
    })
  }


  registrarCliente(event: Event){
    event.preventDefault();
    const idcliente = getUniqueID();
    const nombre = (document.getElementById('f_nombre') as HTMLInputElement).value;
    const correo = (document.getElementById('f_correo') as HTMLInputElement).value;
    const clave = (document.getElementById('f_clave') as HTMLInputElement).value;
    const telefono = (document.getElementById('f_telefono') as HTMLInputElement).value;
    const direccion = (document.getElementById('f_direccion') as HTMLInputElement).value;
    //const id_usuario = '2'; // ? -> lo queria asignar pero me dicuenta que eso crea el error

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

          // Reiniciar el formulario después de 5 segundos
          setTimeout(() => {
            this.formulario = {
              idcliente: '',
              nombre: '',
              correo: '',
              clave: '',
              telefono: '',
              direccion: '',
              //id_usuario:'',
              
            };
            this.registroExitoso = false; // Restablecer el estado de éxito
          }, 5000);
  
  
        },error => {
          this.registroExitoso = false;
          this.registroFallido = true;
          console.error('Error al registrar el cliente:', error);
          console.log("cliente -> ", nuevoregistro )
      
      })

  }

  eliminarCliente(indice:number): void{
    //this.listPersona.splice(id,1);
    const clienteeliminado = this.cliente.splice(indice, 1)[0];

    
      this.cliente.push(clienteeliminado);
  
    

  }

}
