import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetAComponent } from './det-a.component';

describe('DetAComponent', () => {
  let component: DetAComponent;
  let fixture: ComponentFixture<DetAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
