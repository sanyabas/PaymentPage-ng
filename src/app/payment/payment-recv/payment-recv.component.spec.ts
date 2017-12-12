import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentRecvComponent } from './payment-recv.component';

describe('PaymentRecvComponent', () => {
  let component: PaymentRecvComponent;
  let fixture: ComponentFixture<PaymentRecvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentRecvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentRecvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
