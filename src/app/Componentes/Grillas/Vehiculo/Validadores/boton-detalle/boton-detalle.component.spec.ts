import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonDetalleComponent } from './boton-detalle.component';

describe('BotonDetalleComponent', () => {
  let component: BotonDetalleComponent;
  let fixture: ComponentFixture<BotonDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotonDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
