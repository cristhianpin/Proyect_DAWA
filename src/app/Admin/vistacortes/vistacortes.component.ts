import { Component } from '@angular/core';
import { Cortes } from 'src/app/models/Cortes';
import { CortesbarbaService } from 'src/app/services/cortesbarba.service';
import { CortescabelloService } from 'src/app/services/cortescabello.service';

@Component({
  selector: 'app-vistacortes',
  templateUrl: './vistacortes.component.html',
  styleUrls: ['./vistacortes.component.css']
})
export class VistacortesComponent {

  corteC!: Cortes[];
  corteB!: Cortes[];
    
  constructor(private registrarcortec: CortescabelloService, private registrarcorteb: CortesbarbaService){
    this.obtenercorteC();
    this.obtenercorteB();
  }

  obtenercorteC(){

    this.registrarcortec.getDatos().subscribe(data =>{
      this.corteC = data;
      console.log(this.corteC)
    })
  }

    
  obtenercorteB(){

    this.registrarcorteb.getDatos().subscribe(data =>{
    this.corteB = data;
      console.log(this.corteB)
    })
  }


  }

