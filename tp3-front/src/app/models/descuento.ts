import { Injectable } from "@angular/core";
import { GenericModel } from "./generic-model";

@Injectable({
    providedIn: 'root',
  })
export class Descuento extends GenericModel{
    tipo!: string;
    nombre!: string;
    fechaInicio!: Date;
    fechaFin!: Date;
    descuento!: number;

}