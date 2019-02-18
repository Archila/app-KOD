import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { ProveedorService } from 'src/app/services/proveedor/proveedor.service';
import { Router } from '@angular/router';
import { ToasterService, ToasterConfig }  from 'angular2-toaster';

@Component({
  selector: 'app-proveedor-list',
  templateUrl: './proveedor-list.component.html',
  styleUrls: ['./proveedor-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProveedorListComponent implements OnInit {

  public data;
  
  public filterQuery = '';
  public rowsOnPage = 15;
  public sortBy = "id";
  public sortOrder = "asc";
  public opcion;
  public searchTimeout : any;

  //Paginacion
  public currentPage = 1;
  public totalItems = 0;
  public itemsPerPage = 15;
  public rotate = false;
  public maxSize = 10;

  public itemIdEliminar = 0;

  public toInt(num:string) {
    return +num;
  }

  public sortByWordLength = (a:any) => {
    return a.nombre.length;
  }

  //Configuración del toast
  private toasterService: ToasterService;

  public toasterconfig : ToasterConfig =
    new ToasterConfig({
      tapToDismiss: true,
      timeout: 5000
    });

  constructor(private proveedorService:ProveedorService, toasterService: ToasterService) {
    this.toasterService = toasterService;
   }

  ngOnInit() {
    this.currentPage = <any>localStorage.getItem('page_proveedores');
    this.loadProveedor();
    
  }

  loadProveedor(busqueda? : any, resetPagina? : boolean){

    //Guardamos la pagina actual
    var page = this.currentPage;

    //Si debems volver a la primer pagina
    if(resetPagina) {
       page = 1;
    }

    //Filtros del caso
    var filter =  {
      page: +page,
      many: this.itemsPerPage,
      sort_by: this.sortBy,
      direction: this.sortOrder,
      ...busqueda
    }

    this.proveedorService.getProveedores(filter)
    .subscribe((data) => { 
        this.data = data.data;
        this.totalItems = data.total;

        if(resetPagina) {
          this.currentPage = 1;
        }
      });
  }

  //Cambio de pagina
  pageChanged(page) {
    
    this.currentPage = page;
    localStorage.setItem('page_usuarios', <any>this.currentPage);
    if (this.filterQuery !== '') {
      this.loadProveedor({nombre : this.filterQuery});
    }
    else {
      this.loadProveedor();
    }
  }

  //Busqueda
  search() {
    clearTimeout(this.searchTimeout);
    //Volvemos a la pagina 1
    this.searchTimeout = setTimeout(() => {
      this.loadProveedor({nombre : this.filterQuery}, true)
    }, 1000)
  }

  //Dirección de ordenamiento de una columna seleccionada
  columnSort(column, event) {
    this.sortBy = column;

    switch (event) {
      case 0:
        this.sortOrder = 'asc';
        this.sortBy = column;
        break;
      case 1:
        this.sortOrder = 'desc';
        this.sortBy = column;
        break;
      case 2:
        this.sortOrder = 'asc';
        this.sortBy = 'id';
        break;
      default:
        break;
    }
    if(this.filterQuery !== ""){
      this.loadProveedor({nombre : this.filterQuery, sort_by : this.sortBy, direction : this.sortOrder});
    }
    else {
      this.loadProveedor({sort_by : this.sortBy, direction : this.sortOrder})
    }
  }

  //Verifica qué columna está seleccionada
  isSorted(column : string) {
    if (column == this.sortBy) {
      return true;
    }
    else {
      return false;
    }
  }

  //Mensaje desplegado por el toast
  showSuccess() {
    if(this.itemIdEliminar != 0){
      this.proveedorService.deleteProveedor({data:1}, this.itemIdEliminar)
      .subscribe((success) => {
        if(success){
          this.toasterService.pop('success', 'Eliminado', 'El usuario se eliminó con éxito');
          this.ngOnInit();
        }
        else
          this.toasterService.pop('error', 'Error', 'Ocurrio un error al eliminar el usuario');
      })
    }
  }

}
