import {Payment} from '../../payment';

export class CardPayment extends Payment {
  constructor(public cardNumber: string,
              public expiration: string,
              public cvc: number,
              public sum: number,
              public comment: string,
              public email: string) {
    super();
  }
}
