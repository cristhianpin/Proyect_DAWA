import { Injectable } from '@angular/core';
import { Cita } from './../models/cita.model';
import { ClienteService } from './cliente.service';
import { ServicioService } from './servicio.service';

@Injectable({
  providedIn: 'root'
})
export class CitaService {
  private citas: Cita[] = [
    new Cita(new Date(), '10:00', 1, [1, 2, 3], true, this.servicioService),
    new Cita(new Date(), '14:30', 2, [4, 5], false, this.servicioService)
    // Agrega más citas aquí según sea necesario
  ];

  constructor(private clienteService: ClienteService, private servicioService: ServicioService) { }

  obtenerCitas(): Cita[] {
    return this.citas;
  }

  obtenerCitasPorClienteId(clienteId: number): Cita[] {
    return this.citas.filter(cita => cita.clienteId === clienteId);
  }

  obtenerCitaPorId(id: number): Cita | undefined {
    return this.citas.find(cita => cita.serviciosIds.includes(id));
  }
}
