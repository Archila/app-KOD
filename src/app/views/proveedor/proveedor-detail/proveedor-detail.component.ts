import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router , ParamMap } from '@angular/router';
import { ProveedorService } from 'src/app/services/proveedor/proveedor.service';
@Component({
  selector: 'app-proveedor-detail',
  templateUrl: './proveedor-detail.component.html',
  styleUrls: ['./proveedor-detail.component.css']
})
export class ProveedorDetailComponent implements OnInit {
  public proveedorId;
  proveedor=[];
  constructor(private proveedorService: ProveedorService, private route: ActivatedRoute, private router:Router) { }



  ngOnInit() {
  /*
    let id= parseInt(this.route.snapshot.paramMap.get('id'));
    this.proveedorId=id; */

    this.route.paramMap.subscribe((params: ParamMap)=>{
      let id=parseInt(params.get('id'));
      this.proveedorId=id;

      this.proveedorService.getProveedor(this.proveedorId).subscribe(
        (data)=>{
          this.proveedor=data;
          console.log(this.proveedor);
        })
    })
  }

  goPrevious(){
    let previousId=this.proveedorId-1;
    this.router.navigate(['/proveedor',previousId]);
  }

  goNext(){
    let nextId=this.proveedorId+1;
    this.router.navigate(['/proveedor',nextId]);
  
  }

  gotoProveedores(){
    let selectedId=this.proveedorId ? this.proveedorId:null;
    this.router.navigate(['/proveedores',{id:selectedId}]);
  }
}
