import { Injectable } from "@angular/core";
import { GenericModel } from "./generic-model";
import { Cliente } from "./cliente";
import { Producto } from "./producto";
import { Tarjeta } from "./tarjeta";

@Injectable({
    providedIn: 'root',
  })
export class Venta extends GenericModel{
    fechaVenta!: Date;
    cliente!: Cliente;
    tarjeta!: Tarjeta;
    listaProductos: Producto[]=[];
    totalPagado!: number;
    numeroUnico!: string;

}