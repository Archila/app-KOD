import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { P404Component } from './404.component';
import { P401Component } from './401.component';
import { LoginComponent } from './login.component';

import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  declarations: [
    P404Component,
    P401Component,
    LoginComponent,
  ],
  exports: [
  ]
})
export class PagesModule { }
