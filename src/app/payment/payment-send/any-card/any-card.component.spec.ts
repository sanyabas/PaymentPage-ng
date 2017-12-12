import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnyCardComponent } from './any-card.component';

describe('AnyCardComponent', () => {
  let component: AnyCardComponent;
  let fixture: ComponentFixture<AnyCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnyCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
