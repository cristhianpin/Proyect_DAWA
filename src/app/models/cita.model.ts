import { Servicio } from './servicio.model';
import { ServicioService } from './../service/servicio.service';

export class Cita {
  fecha: Date;
  hora: string;
  clienteId: number;
  serviciosIds: number[];
  totalCosto: number;
  confirmada: boolean;

  constructor(fecha: Date, hora: string, clienteId: number, serviciosIds: number[], confirmada: boolean, private servicioService: ServicioService) {
    this.fecha = fecha;
    this.hora = hora;
    this.clienteId = clienteId;
    this.serviciosIds = serviciosIds;
    this.totalCosto = this.calcularTotalCosto();
    this.confirmada = confirmada;
  }

  private calcularTotalCosto(): number {
    let total = 0;
    for (const servicioId of this.serviciosIds) {
      const servicio = this.servicioService.obtenerServicioPorId(servicioId);
      if (servicio) {
        total += servicio.costo;
      }
    }
    return total;
  }
}
