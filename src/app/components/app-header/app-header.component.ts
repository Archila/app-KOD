import { Component } from '@angular/core';
import { Router } from '@angular/router';

//import { AuthService } from '../../services/auth/auth.service';
import { SettingsService } from 'src/app/services/settings/settings.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styles: ['.example-icon { padding: 0 14px; } .example-spacer { flex: 1 1 auto; } '],
})
export class AppHeaderComponent { 

  perfil : any = {};

  constructor(
    //private auth: AuthService, 
    private route: Router,
    private settingsService : SettingsService,
  ) { }

  ngOnInit() {
    //Obtener el perfil del usuario
    //this.perfil = this.settingsService.getUserPerfil();
    this.perfil = {
      iniciales: 'IA',
      user : {
        name: 'Ivan',
        rol: 'Administrador'
      }
    }

    //Obtenemos la inicial del nombre del usuario
    this.perfil.iniciales = this.perfil.user.name.slice(0,1).toUpperCase();

  }

  logout() {
    /*this.auth.logout().subscribe(
      (response) => {
        this.route.navigate(['/login']);
      }
    );*/
    this.route.navigate(['/login']);
  }
}
