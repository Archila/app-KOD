import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ InicioComponent],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule, 
  ]
})
export class InicioModule { }
