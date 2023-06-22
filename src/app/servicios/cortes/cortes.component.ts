import { Component } from '@angular/core';
import { Cortes } from 'src/app/models/Cortes';

@Component({
  selector: 'app-cortes',
  templateUrl: './cortes.component.html',
  styleUrls: ['./cortes.component.css']
})
export class CortesComponent {
  cabello: boolean = false;
  barba: boolean = false;

  listaCortes: Cortes[] = [
    new Cortes(1, 'Fade alto con french crop', 5, 'Cabello', '../assets/estilos_cortes/c1.png'),
    new Cortes(2, 'Corte militar', 5, 'Cabello', '../assets/estilos_cortes/c2.png'),
    new Cortes(3, 'Corte de cabello rapado', 5, 'Cabello', '../assets/estilos_cortes/c3.png'),
    new Cortes(4, 'Undercut', 5, 'Cabello', '../assets/estilos_cortes/c4.png'),
    new Cortes(5, 'Barba circular', 5, 'Barba', '../assets/estilos_barbas/b1.png'),
    new Cortes(6, 'Barba real', 5, 'Barba', '../assets/estilos_barbas/b2.png'),
    new Cortes(7, 'Barba candado', 5, 'Barba', '../assets/estilos_barbas/b3.png'),
  ];

  getCortesCategoria(categoria: string): Cortes[] {
    return this.listaCortes.filter(corte => corte.categoria === categoria);
  }

  cabello_E() {
    this.cabello = true;
    this.barba = false;
  }

  barba_E() {
    this.cabello = false;
    this.barba = true;
  }

}
