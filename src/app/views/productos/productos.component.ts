import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort, Sort} from '@angular/material';
import { ProductoService} from '../../services/producto/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;

  //Paginacion y ordenamiento
  public currentPage = 1;
  public totalItems = 0;
  public itemsPerPage = 10;
  public sort_by = 'id';
  public direction = 'desc';
  
  listadoProductos = [];
  listadoOrdenado = [];
  ready = false;
  cont = 0;
  busqueda = null;
  public searchTimeout : any;

  constructor( private productoService: ProductoService) { }

  ngOnInit() {    
    this.loadDataTable(true);    
  }  

  async loadDataTable(reset? : boolean, busqueda? :any){
    //Guardamos la pagina actual
    var page = this.currentPage;

    if(reset) {page = 1;}
    
    var  filter ={
      page: page,
      many: this.itemsPerPage,  
      sort_by: this.sort_by,
      direction: this.direction,     
      ...busqueda 
    }  
      
    this.listadoProductos = [];
    this.cont=0;
    this.productoService.getProductos(filter)
    .subscribe((data: any)=>{
      this.listadoProductos = data.data.slice();
      this.totalItems = data.total;      
      this.listadoOrdenado = this.listadoProductos.slice();   
      this.ready = true;   
    });    
  }

  sortData(sort: Sort) {    

    this.direction = sort.direction;
    this.sort_by = sort.active;
    var filtro = null;
    if (this.busqueda != ''){
      filtro = {
        nombre: this.busqueda,
        proveedor: this.busqueda,
        categoria_producto: this.busqueda
      }
    }
    
    this.loadDataTable(false, filtro).then( () => {
      const data = this.listadoProductos.slice();
      if (!sort.active || sort.direction === '') {
        this.listadoOrdenado = data;
        return;
      }
      this.listadoOrdenado = data.sort((a, b) => {
        const isAsc = sort.direction === 'asc';      
        switch (sort.active) {
          case 'id': return compare(a.id, b.id, isAsc);
          case 'indice': return compare(a.indice, b.indice, isAsc);
          case 'nombre': return compare(a.nombre, b.nombre, isAsc);
          case 'cantidad': return compare(a.cantidad, b.cantidad, isAsc);
          case 'presentacion': return compare(a.presentacion, b.presentacion, isAsc);
          case 'precio': return compare(a.precio, b.precio, isAsc);
          case 'categoria': return compare(a.categoria, b.categoria, isAsc);
          case 'proveedor': return compare(a.proveedor, b.proveedor, isAsc);
          default: return 0;
        }
      });
    });    
  }       

  //Cambio de pagina
  pageChanged(event) {
    this.currentPage = event.pageIndex +1;    
    this.itemsPerPage = event.pageSize;
    if (this.busqueda != ''){
      var filtro = {
        nombre: this.busqueda,
        proveedor: this.busqueda,
        categoria_producto: this.busqueda
      }
      this.loadDataTable(false,filtro);    
    }
    else {
      this.loadDataTable(false);
    }    
  } 

  buscar(){
    clearTimeout(this.searchTimeout);
    //Volvemos a la pagina 1
    this.searchTimeout = setTimeout(() => {
      var filtro = {
        nombre: this.busqueda,
        proveedor: this.busqueda,
        categoria_producto: this.busqueda
      }
      this.loadDataTable(true, filtro);
    }, 500)
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
