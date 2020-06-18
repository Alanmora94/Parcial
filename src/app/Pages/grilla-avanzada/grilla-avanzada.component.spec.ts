import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrillaAvanzadaComponent } from './grilla-avanzada.component';

describe('GrillaAvanzadaComponent', () => {
  let component: GrillaAvanzadaComponent;
  let fixture: ComponentFixture<GrillaAvanzadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrillaAvanzadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrillaAvanzadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
