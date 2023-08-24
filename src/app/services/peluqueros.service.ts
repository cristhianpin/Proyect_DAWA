import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Peluquero } from '../models/Peluqueros';

@Injectable({
  providedIn: 'root'
})
export class PeluquerosService {

  private apiUrl = 'https://localhost:7094/api'; // URL de tu API

  
  constructor(private http: HttpClient) { }

  agregarProducto(peluqueria: Peluquero) {
    return this.http.post(this.apiUrl, peluqueria);
  }

  getDatos(): Observable<any> {
    
    return this.http.get(`${this.apiUrl}/Peluqueros`);
    
  }

  postDatos(datos: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/Peluqueros`, datos);
  }
}
