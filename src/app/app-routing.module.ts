import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { InicioComponent } from './views/inicio/inicio.component';
import { ProveedorListComponent } from './views/proveedor/proveedor-list/proveedor-list.component';
import { ProveedorDetailComponent } from './views/proveedor/proveedor-detail/proveedor-detail.component';
import { ProveedorNewEditComponent } from './views/proveedor/proveedor-new-edit/proveedor-new-edit.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', redirectTo: '/inicio',pathMatch: 'full'},
  {path: 'inicio',component: InicioComponent,},
  {path: 'proveedores', component: ProveedorListComponent,},
  {path: 'proveedor/:id',component: ProveedorDetailComponent},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents=[
  InicioComponent,
  ProveedorListComponent,
  ProveedorDetailComponent,
  ProveedorNewEditComponent,
  PageNotFoundComponent  
];