import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PaymentSendComponent} from './payment/payment-send/payment-send.component';
import {PaymentRecvComponent} from './payment/payment-recv/payment-recv.component';

const appRoutes: Routes = [
  {path: 'send', component: PaymentSendComponent},
  {path: 'request', component: PaymentRecvComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
