import {Component, OnInit} from '@angular/core';
import {CardPayment} from './card-payment';
import {BankingService} from '../../../banking-service.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-any-card',
  templateUrl: './any-card.component.html',
  styleUrls: ['./any-card.component.css',
    '../../payments.css']
})
export class AnyCardComponent implements OnInit {

  payForm: FormGroup;
  payment = new CardPayment(undefined, undefined, undefined, undefined, undefined, undefined);
  submitted = false;
  success = false;
  error = null;
  phone = null;

  onSubmit() {
    this.submitted = true;
    const payment = this.assemblePayment();
    this.banking.sendCardPayment(payment).subscribe(
      result => {
        console.log(result);
        if (result['ok'] === 'true') {
          this.success = true;
          console.log(result);
        } else {
          console.error(result['error']);
          this.error = result['error'];
        }
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
      cardNumber: ['', [
        Validators.required, Validators.pattern(/\d{16}/)
      ]],
      expiration: ['', [
        Validators.required, Validators.pattern(/[01][1-9]\/[1-3][0-9]/)
      ]],
      cvc: ['', [
        Validators.required, Validators.pattern(/\d{3}/)
      ]],
      sum: ['', [
        Validators.required, Validators.min(1000), Validators.max(75000)
      ]],
      comment: [''],
      email: ['', [
        Validators.required, Validators.email
      ]]
    });
  }

  assemblePayment() {
    const formValues = this.payForm.value;
    return new CardPayment(
      formValues.cardNumber,
      formValues.expiration,
      formValues.cvc,
      formValues.sum,
      formValues.comment,
      formValues.email
    );
  }

  get diagnostic() {
    return JSON.stringify(this.payForm.value);
  }

}
