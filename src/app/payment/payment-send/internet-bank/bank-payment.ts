import {Payment} from '../../payment';

export class BankPayment extends Payment {
  constructor(public from: string,
              public bik: string,
              public account: string,
              public purpose: string,
              public sum: number) {
    super();

  }
}
