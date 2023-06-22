import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-menu-registro',
  templateUrl: './menu-registro.component.html',
  styleUrls: ['./menu-registro.component.css']
})
export class MenuRegistroComponent {
  constructor( private router: Router) {


  }
  

  menu() {
    
    this.router.navigate(['../home/']); // Navegar a la página de inicio
  }
}
