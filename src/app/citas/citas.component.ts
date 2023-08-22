import { Component } from '@angular/core';


export interface Citas {
  fecha: string;
  servicios: string;
  precio: number;
  barbero: string;
  hora: string;
}

const ELEMENT_DATA: Citas[] = [
  {fecha: '10-Jun-2023', servicios: 'Corte de Cabello, Corte de Barba', precio: 20.00, barbero: 'José', hora: '10:30am'},

];

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent {
  displayedColumns: string[] = ['fecha', 'servicios', 'precio', 'barbero', 'hora'];
  dataSource = ELEMENT_DATA;
}
