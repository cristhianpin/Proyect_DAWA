
export interface corte{
  id: string;
  nombre: string;
  precio: string;
  id_corte: string;
}


export class Cortes {
  id_cortes: number;
  nombre: string;
  precio: number;
  categoria: 'Cabello' | 'Barba';
  imagen: string;

  constructor(id_cortes: number, nombre: string, precio: number, categoria: 'Cabello' | 'Barba', imagen: string) {
    this.id_cortes = id_cortes;
    this.nombre = nombre;
    this.precio = precio;
    this.categoria = categoria;
    this.imagen = imagen;
  }
}
