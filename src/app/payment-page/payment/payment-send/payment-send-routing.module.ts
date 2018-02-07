import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PaymentSendComponent} from './payment-send.component';
import {AnyCardComponent} from './any-card/any-card.component';
import {InternetBankComponent} from './internet-bank/internet-bank.component';

const sendPaymentRoutes: Routes = [
  {
    path: 'send',
    component: PaymentSendComponent,
    children: [
      {
        path: 'card',
        component: AnyCardComponent
      },
      {
        path: 'internet-bank',
        component: InternetBankComponent
      },
      {
        path: '',
        component: AnyCardComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(sendPaymentRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PaymentSendRoutingModule {

}
