export class BankPayment {
  constructor(public from: string,
              public bik: string,
              public account: string,
              public purpose: string,
              public sum: number) {

  }
}
