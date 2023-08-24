import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { corte } from './../models/Cortes'

@Injectable({
  providedIn: 'root'
})
export class CortescabelloService {

  private apiUrl = 'https://localhost:7094/api'; // URL de tu API

  constructor(private http: HttpClient) { }

  agregarCortec(cortesc: corte) {
    return this.http.post(this.apiUrl, cortesc);
  }

  getDatos(): Observable<any> {
    
    return this.http.get(`${this.apiUrl}/CorteCabellos`);
    
  }

  postDatos(datos: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/CorteCabellos`, datos);
  }

}
