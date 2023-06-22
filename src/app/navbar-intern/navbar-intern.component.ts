import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar-intern',
  templateUrl: './navbar-intern.component.html',
  styleUrls: ['./navbar-intern.component.css']
})
export class NavbarInternComponent {
  constructor(private router: Router) {}

  logout() {

    // Ejemplo de lógica de cierre de sesión:
    // authService.logout();
    this.router.navigate(['/home']);
    
  }
}
{}
