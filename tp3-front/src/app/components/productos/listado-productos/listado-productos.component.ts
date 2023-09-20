import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { Producto } from 'src/app/models/producto';
import { Tarjeta } from 'src/app/models/tarjeta';
import { Venta } from 'src/app/models/venta';
import { ClienteService } from 'src/app/service/cliente.service';
import { ProductoService } from 'src/app/service/producto.service';
import { VentaService } from 'src/app/service/venta.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}



@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.css'],
})

export class ListadoProductosComponent implements OnInit{
  productos: Producto[]= [];
  tarjetas: Tarjeta[]= [];
  tarjetaSelected!: Tarjeta;
  displayedColumns: string[] = ['id', 'codigo', 'descripcion', 'nombreCategoria','marca','precio','select'];
  dataSource = new MatTableDataSource<Producto>(this.productos);
  selection = new SelectionModel<Producto>(true, []);

  @ViewChild(MatTable) table!: MatTable<PeriodicElement>;

  constructor(private _snackBar: MatSnackBar,private productoService: ProductoService, private route: Router, private clienteService: ClienteService, private ventaService: VentaService, private venta:Venta){

  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
  ngOnInit(): void{
    this.productoService.getProductos().subscribe(res => {
      
      this.productos= res;
    })
    this.clienteService.getTarjetas().subscribe(res =>{
      this.tarjetas= res;
    })
  }
 
  goToListDesc(): void{
    this.route.navigate(['/descuentos/listar']).then();
  }
  
  addCard(tarjeta:Tarjeta): void{
    this.tarjetaSelected= tarjeta;
  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
   const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    /*if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);*/
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Producto): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    // ver como agregar y sacar de la lista el producto seleccionado
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id}`;
  }

  addSold(): void{
    this.venta.listaProductos= this.selection.selected;
    let cliente: Cliente= new Cliente();
    cliente.id='1';
    this.venta.cliente= cliente;
    this.venta.tarjeta=this.tarjetaSelected;
    this.ventaService.addVenta(this.venta).subscribe(
      (res: any) => { 
      this.openSnackBar('Se realizo una venta',res);
      console.log(res);
    },
      (error: any) => {
        // Manejar el error
      if (error.error && error.error.message) {
      // Si el servidor proporciona un mensaje de error, lo mostramos en el snackbar
      this.openSnackBar('Error al realizar la venta', error.error.message);
     } else {
      // Si no hay un mensaje de error específico del servidor, mostramos un mensaje genérico
      this.openSnackBar('Error al realizar la venta', 'Hubo un problema al procesar la venta.');
      console.log(error);
      }
    })
    
  }
  
  
  
  calcularVenta(): void{
    this.venta.listaProductos= this.selection.selected;
    this.venta.tarjeta=this.tarjetaSelected;
    this.ventaService.calcularVenta(this.venta).subscribe(
      (res: any) => { 
      this.openSnackBar('El monto total con descuentos es',res);
      console.log(res);
    },
      (error: any) => {
        // Manejar el error
      if (error.error && error.error.message) {
      // Si el servidor proporciona un mensaje de error, lo mostramos en el snackbar
      this.openSnackBar('Error al realizar la venta', error.error.message);
     } else {
      // Si no hay un mensaje de error específico del servidor, mostramos un mensaje genérico
      this.openSnackBar('Error al realizar la venta', 'Hubo un problema al procesar la venta.');
      console.log(error);
      }
    })
    
  }

}
