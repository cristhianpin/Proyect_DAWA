import { Component } from '@angular/core';
import { DataService} from '../services/data.service';

@Component({
  selector: 'app-header-prin',
  templateUrl: './header-prin.component.html',
  styleUrls: ['./header-prin.component.css']
})
export class HeaderPrinComponent {
  permisoPadre: String="true";

  constructor(private _dataServices: DataService){};

  ngOnInit(){
    this._dataServices.permiso$.subscribe(texto => {
      this.permisoPadre = texto;
      console.log('estadoPermiso:',texto); 
    })
  }


}
