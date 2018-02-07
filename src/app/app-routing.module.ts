import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PaymentSendComponent} from './payment-page/payment/payment-send/payment-send.component';
import {PaymentRecvComponent} from './payment-page/payment/payment-recv/payment-recv.component';
import {AdminComponent} from './admin/admin.component';
import {PaymentPageComponent} from './payment-page/payment-page.component';
import {AnyCardComponent} from './payment-page/payment/payment-send/any-card/any-card.component';
import {InternetBankComponent} from './payment-page/payment/payment-send/internet-bank/internet-bank.component';
import {LoginComponent} from './admin/login/login.component';
import {CardsLogComponent} from './admin/logs/cards-log/cards-log.component';
import {RequestsLogComponent} from './admin/logs/requests-log/requests-log.component';
import {LogsComponent} from './admin/logs/logs.component';
import {LoginRedirectService} from './admin/login-redirect.service';
import {AuthCheckService} from './admin/auth-check.service';

const appRoutes: Routes = [
  {
    path: 'admin', component: AdminComponent, children: [
      {path: 'login', component: LoginComponent, canActivate: [LoginRedirectService]},
      {
        path: 'logs', component: LogsComponent, children: [
          {path: 'card', component: CardsLogComponent, canActivate: [AuthCheckService]},
          {path: 'requests', component: RequestsLogComponent, canActivate: [AuthCheckService]},
          {path: '', redirectTo: '/admin/logs/card', pathMatch: 'full'}
        ]
      },
      {path: '', redirectTo: '/admin/login', pathMatch: 'full'}
    ]
  },
  {
    path: 'payment', component: PaymentPageComponent, children: [
      {path: 'request', component: PaymentRecvComponent},
      {
        path: 'send', component: PaymentSendComponent, children: [
          {path: 'card', component: AnyCardComponent},
          {path: 'internet-bank', component: InternetBankComponent},
          {path: '', redirectTo: '/payment/send/card', pathMatch: 'full'}
        ]
      }
    ],
  },
  {path: '', redirectTo: '/payment/send/card', pathMatch: 'full'}
  // {path: 'send', component: PaymentSendComponent},
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
export class AppRoutingModule {
}
