import { Component } from '@angular/core';
import { Peluquero } from 'src/app/models/Peluqueros';
import { PeluquerosService } from 'src/app/services/peluqueros.service';

@Component({
  selector: 'app-vistapeluqueros',
  templateUrl: './vistapeluqueros.component.html',
  styleUrls: ['./vistapeluqueros.component.css']
})
export class VistapeluquerosComponent {
  peluquero!: Peluquero[];
  constructor(private verpeluquero: PeluquerosService){
    this.obtenerpeluqueros();
  } 

  obtenerpeluqueros(){
    this.verpeluquero.getDatos().subscribe(data =>{
      this.peluquero = data;
      console.log(this.peluquero)
    })
  }

}
