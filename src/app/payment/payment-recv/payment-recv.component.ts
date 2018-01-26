import {Component, OnInit} from '@angular/core';
import {PaymentRequest} from './payment-request';
import {BankingService} from '../../banking-service.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-payment-recv',
  templateUrl: './payment-recv.component.html',
  styleUrls: ['./payment-recv.component.css',
    '../payments.css']
})
export class PaymentRecvComponent implements OnInit {

  request = new PaymentRequest(undefined, undefined, undefined, undefined, undefined, undefined, undefined);
  reqForm: FormGroup;
  success = false;
  error = null;

  constructor(private banking: BankingService, private fb: FormBuilder) {
  }

  onSubmit() {
    const request = this.assembleRequest();
    this.banking.sendPaymentRequest(request).subscribe(
      result => {
        console.log(result);
        this.success = result['ok'] === 'true';
      },
      error => {
        console.error(error);
        this.error = 'не удалось подключится к серверу, попробуйте позже';
      }
    );
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.reqForm = this.fb.group({
      to: ['', [Validators.required, Validators.pattern(/\d{10,12}/)]],
      bik: ['', [Validators.required, Validators.pattern(/\d{9}/)]],
      account: ['', [Validators.required, Validators.pattern(/\d{20}/)]],
      goal: ['', [Validators.required, Validators.pattern(/.*((НДС 18%)|(НДС 10%)|(без НДС)).*/)]],
      sum: ['', [Validators.required, Validators.min(1000), Validators.max(75000)]],
      phone: ['', [Validators.required, Validators.pattern(/(\+7|8)\d{10}/)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  assembleRequest() {
    const formValues = this.reqForm.value;
    return new PaymentRequest(
      formValues.to,
      formValues.bik,
      formValues.account,
      formValues.goal,
      formValues.sum,
      formValues.phone,
      formValues.email
    );
  }

}
