import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstablecimientoActualComponent } from './establecimiento-actual.component';

describe('EstablecimientoActualComponent', () => {
  let component: EstablecimientoActualComponent;
  let fixture: ComponentFixture<EstablecimientoActualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstablecimientoActualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstablecimientoActualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
