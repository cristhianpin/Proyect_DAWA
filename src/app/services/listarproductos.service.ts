import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/Productos';

@Injectable({
  providedIn: 'root'
})
export class ListarproductosService {
  private apiUrl = 'https://localhost:7094/api'; // URL de tu API


  constructor(private http: HttpClient) { }

  agregarProducto(productos: Producto) {
    return this.http.post(this.apiUrl, productos);
  }

  getDatos(): Observable<any> {
    
    return this.http.get(`${this.apiUrl}/Productos`);
    
  }

  postDatos(datos: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/Productos`, datos);
  }
}
