import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoDescuentoComponent } from './listado-descuento/listado-descuento.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listar',
    pathMatch: 'full', 
  },
  {
    path: 'listar',
    component: ListadoDescuentoComponent,
    pathMatch: 'full', 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DescuentosRoutingModule { }
