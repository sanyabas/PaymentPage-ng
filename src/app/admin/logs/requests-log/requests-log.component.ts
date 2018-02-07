import {Component, OnInit} from '@angular/core';
import {BankingService} from '../../../banking-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-requests-log',
  templateUrl: './requests-log.component.html',
  styleUrls: ['./requests-log.component.css']
})
export class RequestsLogComponent implements OnInit {
  private requests;

  constructor(private banking: BankingService, private router: Router) {
  }

  ngOnInit() {
    this.getRequests();
  }

  getRequests() {
    this.banking.getRequests().subscribe(result => this.requests = result['values'], error => {
      console.error(error);
      localStorage.removeItem('token');
      this.router.navigateByUrl('/admin/login');
    });
  }

}
