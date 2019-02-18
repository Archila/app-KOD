import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {from } from 'rxjs';




import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';

//pagination
import { PaginationModule } from 'ngx-bootstrap/pagination';

import { DataTableModule } from 'angular2-datatable';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SelectModule } from 'ng-select';
import { ToasterModule, ToasterService } from 'angular2-toaster';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    routingComponents,
    PageNotFoundComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, 
    CommonModule,
    ModalModule.forRoot(),
    ToasterModule.forRoot(),
    DataTableModule,
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule,
    SelectModule,
    PaginationModule.forRoot()

  ],
  providers: [ToasterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
