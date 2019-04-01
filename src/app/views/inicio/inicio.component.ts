import { Component, OnInit } from '@angular/core';
import { EmpresaService } from 'src/app/services/empresa/empresa.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  listadoEmpresas = [];

  constructor(private empresaService: EmpresaService ) { }

  ngOnInit() {
    var filter = {
      all: 1,
    }
    this.empresaService.getEmpresas(filter).subscribe(
      (data) => {
        this.listadoEmpresas = data;
        console.log(this.listadoEmpresas);
      }
    )
  }

}
