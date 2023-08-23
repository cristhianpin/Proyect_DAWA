export interface Peluquero{
  id_peluquero: string;
  nombre: string;
  correo: string;
  clave: string;
  id_usuario: string;

}

export class Peluqueros{
  id_peluquero: number;
  nombre: string;
  apellidos: string;
  especialidad: string;
  experiencia: string;
  imagen: string;

  constructor(id_peluquero: number, nombre: string, apellidos: string, especialidad: string, experiencia: string, imagen: string){
    this.id_peluquero = id_peluquero;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.especialidad = especialidad;
    this.experiencia = experiencia;
    this.imagen = imagen;
  }
}
