import {Component, OnInit} from '@angular/core';
import {BankingService} from '../../../banking-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cards-log',
  templateUrl: './cards-log.component.html',
  styleUrls: ['./cards-log.component.css']
})
export class CardsLogComponent implements OnInit {

  constructor(private banking: BankingService, private router: Router) {
  }

  payments;
  authError = false;

  ngOnInit() {
    this.getPayments();
  }

  getPayments() {
    const payments = this.banking.getPayments().subscribe(result => {
      this.payments = result['values'];
      console.log(result);
    }, error => {
      console.error(error);
      this.authError = true;
      localStorage.removeItem('token');
      this.router.navigateByUrl('/admin/login');
    });
    console.log(this.payments);
  }

  markUnsafe(id) {
    this.banking.markCardPaymentUnsafe(id).subscribe();
  }

}
