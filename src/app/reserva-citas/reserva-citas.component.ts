import { Component, OnInit } from '@angular/core';
import { Cliente } from '../models/cliente.model';
import { Servicio } from '../models/servicio.model';
import { Cita } from '../models/cita.model';
import { ServicioService } from '../service/servicio.service';
import { ClienteService } from '../service/cliente.service';
import { CitaService } from '../service/cita.service';


@Component({
  selector: 'app-reserva-citas',
  templateUrl: './reserva-citas.component.html',
  styleUrls: ['./reserva-citas.component.css']
})
export class ReservaCitasComponent implements OnInit{
  opcionSeleccionada: string = 'opcion1'; 
  servicios: Servicio[] = [];
  cliente: Cliente[] = [];
  cita: Cita[] = [];

  constructor(
    public servicioService: ServicioService,
    private clienteService: ClienteService,
    private citaService: CitaService
  ) {}

  mostrarContenido(opcion: string): void {
    this.opcionSeleccionada = opcion;

    // Obtener servicios
    
  }

  cambiarOpcion(direccion: number) {
    const opciones = ['opcion1', 'opcion2', 'opcion3'];
    const indexActual = opciones.indexOf(this.opcionSeleccionada);
    let indexNuevo = indexActual + direccion;

    // Verificar límites del array
    if (indexNuevo < 0) {
      indexNuevo = opciones.length - 1;
    } else if (indexNuevo >= opciones.length) {
      indexNuevo = 0;
    }

    this.opcionSeleccionada = opciones[indexNuevo];
  }

  ngOnInit(): void {
    this.servicios = this.servicioService.obtenerServicios();

    // Obtener cliente
    this.cliente = this.clienteService.obtenerClientes();

    // Obtener cita
    this.cita = this.citaService.obtenerCitas();
  }
}
