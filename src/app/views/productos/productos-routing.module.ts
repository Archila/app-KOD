import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductosComponent } from './productos.component';

const routes: Routes = [
  {
    path: '',
    component: ProductosComponent,
    data: {
      title: 'Proveedores'
    }
  },
  {
    path: '',
    children : [      
      {
        path: 'edit',
        component: ProductosComponent,
        data: {
          title: 'Detalle Proveedor'
        }
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }