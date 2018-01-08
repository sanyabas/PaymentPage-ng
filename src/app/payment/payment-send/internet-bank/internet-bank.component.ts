import {Component, OnInit} from '@angular/core';
import {BankPayment} from './bank-payment';

@Component({
  selector: 'app-internet-bank',
  templateUrl: './internet-bank.component.html',
  styleUrls: ['./internet-bank.component.css',
    '../../payments.css']
})
export class InternetBankComponent implements OnInit {

  payment = new BankPayment(undefined, undefined, undefined, undefined, undefined);

  onSubmit() {
  }

  constructor() {
  }

  ngOnInit() {
  }

}
