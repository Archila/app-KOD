import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
//import { UsersService } from '../services/usuarios/users.service';
import { Observable } from 'rxjs/internal/Observable';
//import { RegionesService } from '../services/regiones/regiones.service';

@Injectable({
    providedIn: 'root'
})
export class SettingsService implements Resolve<any> {

    private perfil: any;
    private region: any;
    private regiones: any;

    constructor(
        //private usersService: UsersService,
        //private regionesService: RegionesService,
    ) { }

    esAdministrador() {
        return this.perfil.user.rol_id == 1; //Id del rol administrador
    }

    getRegionSeleccionada() {
        //Chequeamos si la region seleccionada fue guardada
        if (!this.region) {
            this.region = localStorage.getItem(this.perfil.user.id + '-region_seleccionada');
        }

        return this.region;
    }

    setRegionSeleccionada(region: any) {
        //Guardamos la region seleccionada
        this.region = region;
        localStorage.setItem(this.perfil.user.id + '-region_seleccionada', region);
    }

    getUserPerfil() {
        //Obtener el perfil
        return this.perfil;
    }

    getUserRegiones() {
        //Obtenermos las regiones del usuario
        return this.regiones;
    }

    public clearSettings() {

        //Limpiamos informacion del perfil y regiones
        this.perfil = null;
        this.region = null;
        this.regiones = null;
        //this.regionesService.clearUserRegiones();
        //this.usersService.clearPerfil();

        //Limpiamos el storage
        localStorage.clear();
        sessionStorage.clear()
        return true;
    }

    resolve() {
        return new Observable<boolean>((observable) => {
            /*this.usersService.getPerfil().subscribe(
                (response: any) => {
                    //Guardamos el perfil
                    this.perfil = response;

                    //Obtener lista de regiones guardadas
                    this.regionesService.getUserRegiones(this.perfil.user.id)
                        .subscribe(
                            (response: any) => {
                                //Guardamos las regiones
                                this.regiones = response;

                                //Establecemos la region seleccionada
                                if (!this.getRegionSeleccionada()) {
                                    this.setRegionSeleccionada(response[0].id);
                                }

                                //Completamos el resolve
                                observable.next(true);
                                observable.complete();
                            },
                            (error: any) => {
                                observable.error(error);
                            }
                        );

                },
                (error: any) => {
                    observable.error(error);
                }
            )*/
        });
    }

    //Funcion que retorna si un usuario tiene permisos para realizar una accion
    //accion - Accion a comprobar ej. 'api/casos'
    //tipo - Tipo de accion ['add', 'edit, 'view', 'delete']
    can(accion: string, tipo: string): boolean {
        if (this.esAdministrador()) {
            return true;
        }

        let valido = false;
        this.perfil.permisos.forEach(permiso => {
            if (permiso.accion == accion) {
                if (tipo == "add" && permiso.add) valido = true;
                if (tipo == "edit" && permiso.edit) valido = true;
                if (tipo == "view" && permiso.view) valido = true;
                if (tipo == "delete" && permiso.delete) valido = true;
            }
        });
        
        return valido;
    }
}