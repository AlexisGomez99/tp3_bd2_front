import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Route, Router } from '@angular/router';
import { Venta } from 'src/app/models/venta';
import { VentaService } from 'src/app/service/venta.service';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
@Component({
  selector: 'app-listado-ventas',
  templateUrl: './listado-ventas.component.html',
  styleUrls: ['./listado-ventas.component.css']
})
export class ListadoVentasComponent implements OnInit{

  ventas: Venta[]= [];
  displayedColumns: string[] = ['id', 'fecha_venta', 'numero_unico', 'total_pagado','cliente_id','tarjeta_id'];
  dataSource = new MatTableDataSource<Venta>(this.ventas);
  selection = new SelectionModel<Venta>(true, []);

  @ViewChild(MatTable) table!: MatTable<PeriodicElement>;

  constructor(private ventaService: VentaService, private route: Router){}

  ngOnInit(): void{
    this.ventaService.getLastSold(1).subscribe(res => {
      
      this.ventas= res;
      console.log(this.ventas);
    })
  }




  redirectToList():void{
    this.route.navigate(['/productos/listar']).then();
  }
}
