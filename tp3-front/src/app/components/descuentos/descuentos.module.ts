import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DescuentosRoutingModule } from './descuentos-routing.module';
import { ListadoDescuentoComponent } from './listado-descuento/listado-descuento.component';
import { MatTableModule } from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [ListadoDescuentoComponent],
  imports: [
    CommonModule,
    DescuentosRoutingModule,
    MatTableModule,
    MatButtonModule
  ]
})
export class DescuentosModule { }
