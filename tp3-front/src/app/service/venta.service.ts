import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {
    ventaUrl,
} from '../config/api';
import { Venta } from '../models/venta';


@Injectable({
  providedIn: 'root'
})
export class VentaService {  

  constructor(private http: HttpClient){}

  getVentas(): Observable<Venta[]>{
    return this.http.get<Venta[]>(ventaUrl+"/listar");
  }

  addVenta(venta: Venta): Observable<any>{
    return this.http.post<Venta>(ventaUrl+"/crear",venta);
  }

  calcularVenta(venta: Venta): Observable<any>{
    return this.http.post<Venta>(ventaUrl+"/calcular",venta);
  }

  getLastSold(id: number): Observable<any>{
    return this.http.get<Venta>(ventaUrl+"/listar-recientes/"+id);
  }

}