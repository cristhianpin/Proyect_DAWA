export interface Clientes{
  idcliente: string;
  nombre: string;
  correo: string;
  clave: string;
  telefono: string;
  direccion: string;
  //id_usuario: string;

}




export class Cliente {
    id: number;
    nombre: string;
    apellido: string;
    telefono: string;
    email: string;
    usuario: string;
    contrasena: string;
  
    constructor(id: number, nombre: string, apellido: string, telefono: string, email: string, usuario: string, contrasena: string) {
      this.id = id;
      this.nombre = nombre;
      this.apellido = apellido;
      this.telefono = telefono;
      this.email = email;
      this.usuario = usuario;
      this.contrasena = contrasena;
    }
  }
  