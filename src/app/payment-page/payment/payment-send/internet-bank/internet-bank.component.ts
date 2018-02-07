import {Component, OnInit} from '@angular/core';
import {BankPayment} from './bank-payment';
import {BankingService} from '../../../../banking-service.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-internet-bank',
  templateUrl: './internet-bank.component.html',
  styleUrls: ['./internet-bank.component.css',
    '../../payments.css']
})
export class InternetBankComponent implements OnInit {

  payment = new BankPayment(undefined, undefined, undefined, undefined, undefined);
  payForm: FormGroup;
  success = false;
  error = null;

  onSubmit() {
    const payment = this.assemblePayment();
    this.banking.sendBankPayment(payment).subscribe(
      result => {
        console.log(result);
      },
      error => {
        console.error(error);
        this.error = 'не удалось подключится к серверу, попробуйте позже';
      }
    );
  }

  constructor(private banking: BankingService, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.payForm = this.fb.group({
      from: ['', [Validators.required, Validators.pattern(/\d{10,12}/)]],
      bik: ['', [Validators.required, Validators.pattern(/\d{9}/)]],
      account: ['', [Validators.required, Validators.pattern(/\d{20}/)]],
      goal: ['', [Validators.required, Validators.pattern(/.*((НДС 18%)|(НДС 10%)|(без НДС)).*/)]],
      sum: ['', [Validators.required, Validators.min(1000), Validators.max(75000)]],
    });
  }

  assemblePayment() {
    const formValues = this.payForm.value;
    return new BankPayment(
      formValues.from,
      formValues.bik,
      formValues.account,
      formValues.goal,
      formValues.sum
    );
  }

}
