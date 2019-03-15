import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioModule } from './views/inicio/inicio.module';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { DataTableModule } from 'angular2-datatable';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SelectModule } from 'ng-select';
import { ToasterModule, ToasterService } from 'angular2-toaster';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';


import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
// Pagination


import { from } from 'rxjs';
import {ProveedorListComponent } from './views/proveedor/proveedor-list/proveedor-list.component';
import {ProveedorDetailComponent } from './views/proveedor/proveedor-detail/proveedor-detail.component';
import {ProveedorNewEditComponent} from './views/proveedor/proveedor-new-edit/proveedor-new-edit.component';
import {PageNotFoundComponent} from './views/page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './views/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ProveedorListComponent,
    ProveedorDetailComponent,
    ProveedorNewEditComponent,
    PageNotFoundComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    InicioModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule,
    DataTableModule,
    CommonModule,
    ModalModule.forRoot(),
    ToasterModule.forRoot(),
    BsDropdownModule,
    SelectModule,
    PaginationModule.forRoot(),
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    CKEditorModule,
  
  ],
  providers: [ToasterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
