import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PruebaComponent } from './prueba.component';
import { PruebaRoutingModule } from './prueba-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [PruebaComponent],
  imports: [
    PruebaRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
  ]
})
export class PruebaModule { }
