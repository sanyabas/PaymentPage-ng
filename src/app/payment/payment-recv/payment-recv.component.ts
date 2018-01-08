import {Component, OnInit} from '@angular/core';
import {PaymentRequest} from './payment-request';

@Component({
  selector: 'app-payment-recv',
  templateUrl: './payment-recv.component.html',
  styleUrls: ['./payment-recv.component.css',
    '../payments.css']
})
export class PaymentRecvComponent implements OnInit {

  request = new PaymentRequest(undefined, undefined, undefined, undefined, undefined, undefined, undefined);

  constructor() {
  }

  onSubmit() {
  }

  ngOnInit() {
  }

}
