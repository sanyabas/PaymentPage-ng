import {Component, OnInit} from '@angular/core';
import {BankingService} from '../../../banking-service.service';

@Component({
  selector: 'app-cards-log',
  templateUrl: './cards-log.component.html',
  styleUrls: ['./cards-log.component.css']
})
export class CardsLogComponent implements OnInit {

  constructor(private banking: BankingService) {
  }

  payments;

  ngOnInit() {
    this.getPayments();
  }

  getPayments() {
    const payments = this.banking.getPayments().subscribe(result => {
      this.payments = result['values'];
      console.log(result);
    });
    console.log(this.payments);
  }

  markUnsafe(id) {
    this.banking.markCardPaymentUnsafe(id);
  }

}
