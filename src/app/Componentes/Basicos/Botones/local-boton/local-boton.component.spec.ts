import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalBotonComponent } from './local-boton.component';

describe('LocalBotonComponent', () => {
  let component: LocalBotonComponent;
  let fixture: ComponentFixture<LocalBotonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalBotonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalBotonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
