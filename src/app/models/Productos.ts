export interface Producto{
  id_producto: string;
  nombre: string;
  precio: string;
  cantidad: string;
}

export class Productos {
  id_producto: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
  expanded: boolean;

  constructor(id_producto: number, nombre: string, descripcion: string, precio: number, imagen: string){
    this.id_producto = id_producto;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
    this.imagen = imagen;
    this.expanded = false;
  }
}
