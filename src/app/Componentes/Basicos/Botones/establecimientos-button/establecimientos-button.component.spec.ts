import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstablecimientosButtonComponent } from './establecimientos-button.component';

describe('EstablecimientosButtonComponent', () => {
  let component: EstablecimientosButtonComponent;
  let fixture: ComponentFixture<EstablecimientosButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstablecimientosButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstablecimientosButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
