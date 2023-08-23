import { Component } from '@angular/core';
import { Peluqueros } from 'src/app/models/Peluqueros';

@Component({
  selector: 'app-peluqueros',
  templateUrl: './peluqueros.component.html',
  styleUrls: ['./peluqueros.component.css']
})
export class PeluquerosComponent {
  listaPeluqueros: Peluqueros[] = [
    new Peluqueros(1, 'Juan', 'Garcia', 'Corte de pelo', '10 años', '../assets/peluqueros/p1.png'),
    new Peluqueros(2, 'Jose', 'García', 'Barbero', '5 años', '../assets/peluqueros/p1.png'),
    new Peluqueros(3, 'Maria', 'Gómez', 'Ayudante', '3 años', '../assets/peluqueros/p2.png'),
  ];

}
