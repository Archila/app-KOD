import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { P404Component } from './404.component';
import { P401Component } from './401.component';
import { LoginComponent } from './login.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '404',
        component: P404Component,
        data: {
          title: 'Error: 404'
        }
      },
      {
        path: '401',
        component: P401Component,
        data: {
          title: 'Error: 401'
        }
      },
      {
        path: 'login',
        component: LoginComponent,
        data: {
          title: 'Login'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
