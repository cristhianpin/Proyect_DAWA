import { Injectable } from '@angular/core';
import { Servicio } from './../models/servicio.model';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  private servicios: Servicio[] = [
    new Servicio(1, 'Corte de pelo', 30),
    new Servicio(2, 'Peinado', 20),
    new Servicio(3, 'Coloración', 50),
    new Servicio(4, 'Afeitado', 15),
    new Servicio(5, 'Arreglo de barba', 10)
    // Agrega más servicios aquí según sea necesario
  ];

  constructor() { }

  obtenerServicios(): Servicio[] {
    return this.servicios;
  }

  obtenerServicioPorId(id: number): Servicio | undefined {
    return this.servicios.find(servicio => servicio.id === id);
  }
}
