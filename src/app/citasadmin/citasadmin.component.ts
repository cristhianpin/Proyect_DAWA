import { Component } from '@angular/core';

export interface CitasAdmin {
  fecha: string;
  servicios: string;
  precio: number;
  cliente: string;
  hora: string;
}

const ELEMENT_DATA: CitasAdmin[] = [
  {fecha: '10-Jun-2023', servicios: 'Corte de Cabello, Corte de Barba', precio: 20.00, cliente: 'José', hora: '10:30am'},

];

@Component({
  selector: 'app-citasadmin',
  templateUrl: './citasadmin.component.html',
  styleUrls: ['./citasadmin.component.css']
})
export class CitasadminComponent {
  displayedColumns: string[] = ['fecha', 'servicios', 'precio', 'cliente', 'hora', 'acciones'];
  dataSource = ELEMENT_DATA;

  eliminarCita(cita: any) {
    // Aquí puedes agregar la lógica para eliminar la cita, por ejemplo, enviando una solicitud al servidor.
    // Puedes acceder a los datos de la cita a eliminar a través del parámetro 'cita'.
  }
  
}
