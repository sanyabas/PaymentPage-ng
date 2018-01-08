import {Component, OnInit} from '@angular/core';
import {CardPayment} from './card-payment';

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
  }

  constructor() {
  }

  ngOnInit() {
  }

  get diagnostic(){
    return JSON.stringify(this.payment);
  }

}
