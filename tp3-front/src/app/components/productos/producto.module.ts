import { NgModule } from '@angular/core';

import { ListadoProductosComponent } from './listado-productos/listado-productos.component';
import {MatTableModule} from '@angular/material/table';
import { ProductoRoutingModule } from './producto-routing.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    ListadoProductosComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    ProductoRoutingModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSelectModule,
    MatSnackBarModule,
  ],
})
export class ProductoModule { }