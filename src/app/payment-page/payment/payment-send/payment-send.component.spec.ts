import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentSendComponent } from './payment-send.component';

describe('PaymentSendComponent', () => {
  let component: PaymentSendComponent;
  let fixture: ComponentFixture<PaymentSendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentSendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentSendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
