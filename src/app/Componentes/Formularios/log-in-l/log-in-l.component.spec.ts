import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInLComponent } from './log-in-l.component';

describe('LogInLComponent', () => {
  let component: LogInLComponent;
  let fixture: ComponentFixture<LogInLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogInLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogInLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
