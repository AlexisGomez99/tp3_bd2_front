import { NgModule } from '@angular/core';

import { ListadoProductosComponent } from './listado-productos/listado-productos.component';
import {MatTableModule} from '@angular/material/table';
import { ProductoRoutingModule } from './producto-routing.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { InfoProdComponent } from './info-prod/info-prod.component';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    ListadoProductosComponent,
    InfoProdComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    ProductoRoutingModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSelectModule,
    MatSnackBarModule,
    FormsModule,
    MatOptionModule,
    MatFormFieldModule,
    
  ],
})
export class ProductoModule { }