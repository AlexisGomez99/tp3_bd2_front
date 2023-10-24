import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoVentasComponent } from './listado-ventas/listado-ventas.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listar',
    pathMatch: 'full', 
  },
  {
    path: 'listar',
    component: ListadoVentasComponent,
    pathMatch: 'full', 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VentasRoutingModule { }
