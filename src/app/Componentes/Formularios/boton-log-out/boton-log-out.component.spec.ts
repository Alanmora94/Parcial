import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonLogOutComponent } from './boton-log-out.component';

describe('BotonLogOutComponent', () => {
  let component: BotonLogOutComponent;
  let fixture: ComponentFixture<BotonLogOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotonLogOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonLogOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
