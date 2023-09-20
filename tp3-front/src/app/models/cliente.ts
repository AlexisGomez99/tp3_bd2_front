import { Injectable } from "@angular/core";
import { GenericModel } from "./generic-model";
import { Tarjeta } from "./tarjeta";

@Injectable({
    providedIn: 'root',
  })
export class Cliente extends GenericModel{
    nombre!: string;
    apellido!: string;
    dni!: string;
    email!: string;
    tarjetas: Tarjeta[]= [];


}