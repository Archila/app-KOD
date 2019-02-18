import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedorNewEditComponent } from './proveedor-new-edit.component';

describe('ProveedorNewEditComponent', () => {
  let component: ProveedorNewEditComponent;
  let fixture: ComponentFixture<ProveedorNewEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProveedorNewEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProveedorNewEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
