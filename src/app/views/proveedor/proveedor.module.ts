import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProveedorDetailComponent } from './proveedor-detail/proveedor-detail.component';
import { ProveedorListComponent } from './proveedor-list/proveedor-list.component';
import { ProveedorRoutingModule } from './proveedor-routing.module';
import { FormsModule, FormGroup } from '@angular/forms';
import {MatCardModule} from '@angular/material/card'; 

@NgModule({
  declarations: [
    ProveedorDetailComponent, 
    ProveedorListComponent,
  ],
  imports: [
    CommonModule,    
    ProveedorRoutingModule,
    FormsModule,
    MatCardModule,
  ]
})
export class ProveedorModule { }
