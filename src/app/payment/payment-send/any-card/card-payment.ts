export class CardPayment {
  constructor(public cardNumber: string,
              public expiration: string,
              public cvc: number,
              public sum: number,
              public comment: string,
              public email: string) {

  }
}
