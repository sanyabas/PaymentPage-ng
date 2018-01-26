import {Component, OnInit} from '@angular/core';
import {BankingService} from '../../../banking-service.service';

@Component({
  selector: 'app-requests-log',
  templateUrl: './requests-log.component.html',
  styleUrls: ['./requests-log.component.css']
})
export class RequestsLogComponent implements OnInit {
  private requests;

  constructor(private banking: BankingService) {
  }

  ngOnInit() {
    this.getRequests();
  }

  getRequests() {
    this.banking.getRequests().subscribe(result => this.requests = result['values']);
  }

}
