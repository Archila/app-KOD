import { ApiBase } from "../api/APIBase";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class EmpresaService extends ApiBase {

    url = {
        empresa: 'empresa'
    };

    constructor( private http : HttpClient) { super(http); }

    getEmpresas(filter : any) {
        return this.get(this.url.empresa, filter);
    }

    getEmpresa(empresa_id : any) {
        return this.get(this.url.empresa + '/' + empresa_id);
    }

    addEmpresa(data : any) {
        return this.post(this.url.empresa, data);
    }

    editEmpresa(empresa_id : any, data : any) {
        return this.put(this.url.empresa + '/' + empresa_id, data);
    }

    deleteEmpresa(empresa_id : any, data:any) {
        return this.delete(this.url.empresa + '/' + empresa_id,data);
    }
}