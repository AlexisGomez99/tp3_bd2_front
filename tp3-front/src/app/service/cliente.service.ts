import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
    clienteUrl,
} from '../config/api';
import { Tarjeta } from '../models/tarjeta';



@Injectable({
  providedIn: 'root'
})
export class ClienteService {  

  constructor(private http: HttpClient){}

  getTarjetas(): Observable<Tarjeta[]>{
    return this.http.get<Tarjeta[]>(clienteUrl+"/listar-tarjeta/"+1);
  }

}