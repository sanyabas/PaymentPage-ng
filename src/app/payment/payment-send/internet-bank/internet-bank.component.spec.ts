import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternetBankComponent } from './internet-bank.component';

describe('InternetBankComponent', () => {
  let component: InternetBankComponent;
  let fixture: ComponentFixture<InternetBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternetBankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternetBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
