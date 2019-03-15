import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ToasterService, ToasterConfig }  from 'angular2-toaster';
import {ProveedorService} from '../../../services/proveedor/proveedor.service';

import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '@ckeditor/ckeditor5-build-classic/build/translations/es';

@Component({
  selector: 'app-proveedor-new-edit',
  templateUrl: './proveedor-new-edit.component.html',
  styleUrls: ['./proveedor-new-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProveedorNewEditComponent implements OnInit {
  
  proveedorForm : FormGroup;
  constructor(toasterService: ToasterService, 
    private router: Router,
    private activatedRoute: ActivatedRoute, private proveedorService:ProveedorService) { 
    
    }
    private toasterService: ToasterService;

    public toasterconfig : ToasterConfig =
      new ToasterConfig({
        tapToDismiss: true,
        timeout: 5000
      });

  ngOnInit() {
 
  }

  save() {
      console.log(this.proveedorForm.value);
  }


}
