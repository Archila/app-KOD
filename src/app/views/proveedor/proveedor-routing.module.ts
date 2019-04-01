import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProveedorListComponent } from './proveedor-list/proveedor-list.component';
import { ProveedorDetailComponent } from './proveedor-detail/proveedor-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ProveedorListComponent,
    data: {
      title: 'Proveedores'
    }
  },
  {
    path: '',
    children : [      
      {
        path: 'detalle',
        component: ProveedorDetailComponent,
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
export class ProveedorRoutingModule { }