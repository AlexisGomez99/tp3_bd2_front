import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Descuento } from 'src/app/models/descuento';
import { DescuentoService } from 'src/app/service/descuento.service';



export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-listado-descuento',
  templateUrl: './listado-descuento.component.html',
  styleUrls: ['./listado-descuento.component.css']
})
export class ListadoDescuentoComponent implements OnInit{
  descuentos: Descuento[]= [];
  displayedColumns: string[] = ['id', 'tipo', 'fechaInicio', 'fechaFin','nombre','descuento'];
  //dataSource = [...this.productos];
  dataSource = new MatTableDataSource<Descuento>(this.descuentos);
  selection = new SelectionModel<Descuento>(true, []);

  @ViewChild(MatTable) table!: MatTable<PeriodicElement>;

  constructor(private productoService: DescuentoService, private route: Router){}

  ngOnInit(): void{
    this.productoService.getDescuentos().subscribe(res => {
      
      this.descuentos= res;
      console.log(this.descuentos);
    })
  }

  goToListProds(): void{
      this.route.navigate(['/productos/listar']).then();
  }


}
