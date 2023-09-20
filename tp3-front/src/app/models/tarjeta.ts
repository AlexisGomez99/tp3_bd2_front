import { Injectable } from "@angular/core";
import { GenericModel } from "./generic-model";

@Injectable({
    providedIn: 'root',
  })
export class Tarjeta extends GenericModel{
    nombre!: string;
    numTarjeta!: string;

}