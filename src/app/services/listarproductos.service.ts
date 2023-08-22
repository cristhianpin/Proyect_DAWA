import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListarproductosService {
  private apiUrl = 'https://localhost:7094/api'; // URL de tu API


  constructor(private http: HttpClient) { }

  getDatos(): Observable<any> {
    
    return this.http.get(`${this.apiUrl}/CorteCabellos`);
    
  }

  postDatos(datos: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/CorteCabellos`, datos);
  }
}
