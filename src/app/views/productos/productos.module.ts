import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosComponent } from './productos.component';
import { ProductosRoutingModule } from './productos-routing.module';
import { MatTableModule, MatSortModule, MatPaginatorModule, MatIconModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductosComponent],
  imports: [
    CommonModule,
    FormsModule,
    ProductosRoutingModule,
    MatTableModule,
    MatPaginatorModule,   
    MatIconModule,
    MatSortModule,
  ]
})
export class ProductosModule { }
