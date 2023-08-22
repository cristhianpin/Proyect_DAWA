import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Clientes } from '../models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrarclienteService {
  private apiUrl = 'https://localhost:7094/api'; // URL de tu API

  
  constructor(private http: HttpClient) { }

  agregarCliente(rescate: Clientes) {
    return this.http.post(this.apiUrl, rescate);
  }

  getDatos(): Observable<any> {
    
    return this.http.get(`${this.apiUrl}/Clientes`);
    
  }

  postDatos(datos: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/Clientes`, datos);
  }
}
