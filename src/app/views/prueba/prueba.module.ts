import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PruebaComponent } from './prueba.component';
import { PruebaRoutingModule } from './prueba-routing.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'; 
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {MatRadioModule} from '@angular/material/radio'; 
import {MatCardModule} from '@angular/material/card'; 
import {MatSliderModule} from '@angular/material/slider'; 


@NgModule({
  declarations: [PruebaComponent],
  imports: [
    PruebaRoutingModule,
    CommonModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    FormsModule,
    MatRadioModule,
    MatCardModule,
    MatSliderModule,
  ]
})
export class PruebaModule { }
