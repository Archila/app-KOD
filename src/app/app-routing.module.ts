import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  FullLayoutComponent,
  SimpleLayoutComponent
} from './containers';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: '',
    component: SimpleLayoutComponent,
    children: [
        {
            path: '',
            loadChildren: './views/pages/pages.module#PagesModule',
        }
    ]
  },
  {
    path: '',
    component: FullLayoutComponent,
    //canActivate: [AuthGuardService],
    //canActivateChild: [AuthGuardService],
    data: {
      title: 'Inicio'
    },
    children: [
      {
        path: 'inicio',
        loadChildren: './views/inicio/inicio.module#InicioModule',
        data: {
          title: 'Inicio'
        }
      },   
      {
        path: 'prueba',
        loadChildren: './views/prueba/prueba.module#PruebaModule',
        data: {
          title: 'Prueba'
        }
      },
    ]
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

