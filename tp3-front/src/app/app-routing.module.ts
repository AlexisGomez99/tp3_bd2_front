import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [{
  path: '', component: AppComponent,
  children:[
    {
      path: 'productos',
      loadChildren: () => import('./components/productos/producto.module').then((m) => m.ProductoModule),
    },{
      path: 'descuentos',
      loadChildren: () => import('./components/descuentos/descuentos.module').then((d) => d.DescuentosModule)
    }]}
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
