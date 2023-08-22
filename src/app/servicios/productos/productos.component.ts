import { Component } from '@angular/core';
import { Productos } from 'src/app/models/Productos';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  listaProductos: Productos[] = [
    new Productos(1, 'Laca', 'Descripción del producto 1', 10, '../assets/productos/pd1.png'),
    new Productos(2, 'Cera mate', 'Descripción del producto 2', 25, '../assets/productos/pd2.png'),
    new Productos(3, 'Shampoo de barba', 'Descripción del producto 3', 30, '../assets/productos/pd3.png'),
  ];

}
