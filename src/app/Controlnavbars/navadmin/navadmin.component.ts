import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService} from '../../services/data.service'

@Component({
  selector: 'app-navadmin',
  templateUrl: './navadmin.component.html',
  styleUrls: ['./navadmin.component.css']
})
export class NavadminComponent {
  constructor(private router: Router, private _dataService: DataService) {}

  logout() {

    // Ejemplo de lógica de cierre de sesión:
    // authService.logout();
    this._dataService.permiso$.emit('true')
    this.router.navigate(['/home']);
    
  }

}
