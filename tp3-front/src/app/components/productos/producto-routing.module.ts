import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoProductosComponent } from './listado-productos/listado-productos.component';
import { InfoProdComponent } from './info-prod/info-prod.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listar',
    pathMatch: 'full', 
  },
  {
    path: 'editar',
    component: InfoProdComponent,
    pathMatch: 'full', 
  },
  {
    path: 'listar',
    component: ListadoProductosComponent,
    pathMatch: 'full', 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
