import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Payment} from './payment-page/payment/payment';
import {BankPayment} from './payment-page/payment/payment-send/internet-bank/bank-payment';
import {PaymentRequest} from './payment-page/payment/payment-recv/payment-request';
import {CardPayment} from './payment-page/payment/payment-send/any-card/card-payment';
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
  private unsafeBody = {
    notSafe: true
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

  getPayments() {
    const finalUrl = this.bankUrl + this.cardUrl;
    return this.http.get(finalUrl);
  }

  markCardPaymentUnsafe(id) {
    const finalUrl = this.bankUrl + this.cardUrl + id;
    return this.http.put(finalUrl, this.unsafeBody).subscribe(result => console.log(result));
  }

  getRequests() {
    const finalUrl = this.bankUrl + this.requestUrl;
    return this.http.get(finalUrl);
  }

}
