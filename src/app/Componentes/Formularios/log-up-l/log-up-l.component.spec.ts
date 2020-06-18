import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogUpLComponent } from './log-up-l.component';

describe('LogUpLComponent', () => {
  let component: LogUpLComponent;
  let fixture: ComponentFixture<LogUpLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogUpLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogUpLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
