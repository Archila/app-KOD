import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { InicioRoutingModule } from './inicio-routing.module';

@NgModule({
  declarations: [ InicioComponent],
  imports: [
    InicioRoutingModule,
    CommonModule,
    HttpClientModule
  ]
})
export class InicioModule { }
