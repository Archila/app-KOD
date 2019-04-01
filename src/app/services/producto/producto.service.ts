import { Injectable } from '@angular/core';
import { ApiBase } from "../api/APIBase";
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ProductoService extends ApiBase{
  
  url={producto: 'producto' };

  constructor(private http: HttpClient) { super(http); }

  getProductos(filter : any){
    return this.get(this.url.producto,filter);
  }

  addProducto(data : any) {
    return this.post(this.url.producto, data);
}

  getProducto(id : any){
    return this.get(this.url.producto+ '/show/?id='+id);
  }

  deleteProducto(proveedor_id : any, data:any) {
    return this.delete(this.url.producto + '/' + proveedor_id),data;
}
}
