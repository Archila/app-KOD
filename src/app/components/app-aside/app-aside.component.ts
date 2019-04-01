import { Component } from '@angular/core';
import { SettingsService } from 'src/app/services/settings/settings.service';

@Component({
  selector: 'app-aside',
  templateUrl: './app-aside.component.html'
})
export class AppAsideComponent {

  userId : any;
  regiones : any = [];
  regionSeleccionada : any;

  listaNotificaciones: any;

  constructor(  
    private settings : SettingsService,
  ) {}
  
  ngOnInit() {
    //Obtenemos la regiones y region seleccionada por el usuario
    //this.regiones = this.settings.getUserRegiones(); 
    //this.regionSeleccionada = this.settings.getRegionSeleccionada();  
    
  }
}
