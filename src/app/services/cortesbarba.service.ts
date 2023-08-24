import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { corte } from './../models/Cortes'

@Injectable({
  providedIn: 'root'
})
export class CortesbarbaService {

  private apiUrl = 'https://localhost:7094/api'; // URL de tu API

  constructor(private http: HttpClient) { }

  agregarCorteb(cortesb: corte) {
    return this.http.post(this.apiUrl, cortesb);
  }

  getDatos(): Observable<any> {
    
    return this.http.get(`${this.apiUrl}/CorteBarbas`);
    
  }

  postDatos(datos: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/CorteBarbas`, datos);
  }



}
