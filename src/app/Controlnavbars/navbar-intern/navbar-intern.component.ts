import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService} from '../../service/data.service'


@Component({
  selector: 'app-navbar-intern',
  templateUrl: './navbar-intern.component.html',
  styleUrls: ['./navbar-intern.component.css']
})
export class NavbarInternComponent {
  constructor(private router: Router, private _dataService: DataService) {}

  logout() {

    // Ejemplo de lógica de cierre de sesión:
    // authService.logout();
    this._dataService.permiso$.emit('true')
    this.router.navigate(['/home']);
    
  }
}
{}
