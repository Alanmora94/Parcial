import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstablecimientoLComponent } from './establecimiento-l.component';

describe('EstablecimientoLComponent', () => {
  let component: EstablecimientoLComponent;
  let fixture: ComponentFixture<EstablecimientoLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstablecimientoLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstablecimientoLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
