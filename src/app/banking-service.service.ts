import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Payment} from './payment/payment';
import {BankPayment} from './payment/payment-send/internet-bank/bank-payment';
import {PaymentRequest} from './payment/payment-recv/payment-request';
import {CardPayment} from './payment/payment-send/any-card/card-payment';
import {of} from 'rxjs/observable/of';
// import * as url from 'url';

// const URL = require('url');

@Injectable()
export class BankingService {

  private bankUrl = 'http://localhost:3416/';
  private cardUrl = 'card-payment';
  private bankPayUrl = 'bank-payment';
  private requestUrl = 'payment-request';
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {
  }

  sendCardPayment(payment: CardPayment) {
    const jsoned = JSON.stringify(payment);
    // const finalUrl = new URL(this.cardUrl, this.bankUrl).toString();
    const finalUrl = this.bankUrl + this.cardUrl;
    return this.send(finalUrl, jsoned);
  }

  sendBankPayment(payment: BankPayment) {
    const jsoned = JSON.stringify(payment);
    const finalUrl = this.bankUrl + this.bankPayUrl;
    return this.send(finalUrl, jsoned);
  }

  sendPaymentRequest(request: PaymentRequest) {
    const jsoned = JSON.stringify(request);
    const finalUrl = this.bankUrl + this.requestUrl;
    return this.send(finalUrl, jsoned);
  }

  send(url, body: string) {
    return this.http.post(url, body, this.httpOptions);
      // .subscribe(result => {
      //     console.log(result);
      //   },
      //   error => {
      //     console.error(error);
      //   });
    // console.log('sent');
  }

}
