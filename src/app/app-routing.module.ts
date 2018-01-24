import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PaymentSendComponent} from './payment/payment-send/payment-send.component';
import {PaymentRecvComponent} from './payment/payment-recv/payment-recv.component';

const appRoutes: Routes = [
  // {path: 'send', component: PaymentSendComponent},
  {path: 'request', component: PaymentRecvComponent},
  {path: '', redirectTo: '/send/card', pathMatch: 'full'}
  // {path: 'send', redirectTo: '/send/card', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
