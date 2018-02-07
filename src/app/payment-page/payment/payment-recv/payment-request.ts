import {Payment} from '../payment';

export class PaymentRequest extends Payment {
  constructor(public to: string,
              public bik: string,
              public account: string,
              public purpose: string,
              public sum: number,
              public phone: string,
              public email: string) {
    super();
  }
}
