import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { InicioRoutingModule } from './inicio-routing.module';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [ InicioComponent],
  imports: [
    InicioRoutingModule,
    CommonModule,
    HttpClientModule,
    MatCardModule
  ]
})
export class InicioModule { }
