import {Component, OnInit} from '@angular/core';
import {CardPayment} from './card-payment';
import {BankingService} from '../../../banking-service.service';

@Component({
  selector: 'app-any-card',
  templateUrl: './any-card.component.html',
  styleUrls: ['./any-card.component.css',
    '../../payments.css']
})
export class AnyCardComponent implements OnInit {

  payment = new CardPayment(undefined, undefined, undefined, undefined, undefined, undefined);
  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.banking.sendCardPayment(this.payment);
  }

  constructor(private banking: BankingService) {
  }

  ngOnInit() {
  }

  get diagnostic() {
    return JSON.stringify(this.payment);
  }

}
