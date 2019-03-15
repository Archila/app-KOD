import { Injectable } from '@angular/core';
import { ApiBase } from "../api/APIBase";
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ProveedorService extends ApiBase{
  
  url={proveedor: 'proveedor' };

  constructor(private http: HttpClient) { super(http); }

  getProveedores(filter : any){
    return this.get(this.url.proveedor,filter);
  }

  addProveedor(data : any) {
    return this.post(this.url.proveedor, data);
}

  getProveedor(id : any){
    return this.get(this.url.proveedor+ '/show/?id='+id);
  }

  deleteProveedor(proveedor_id : any, data:any) {
    return this.delete(this.url.proveedor + '/' + proveedor_id),data;
}
}
