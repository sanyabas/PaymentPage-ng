import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsLogComponent } from './cards-log.component';

describe('CardsLogComponent', () => {
  let component: CardsLogComponent;
  let fixture: ComponentFixture<CardsLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
