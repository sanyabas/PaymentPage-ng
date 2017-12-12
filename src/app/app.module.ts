import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';


import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {PaymentComponent} from './payment/payment.component';
import {PaymentSendComponent} from './payment/payment-send/payment-send.component';
import {PaymentRecvComponent} from './payment/payment-recv/payment-recv.component';
import {AnyCardComponent} from './payment/payment-send/any-card/any-card.component';
import {InternetBankComponent} from './payment/payment-send/internet-bank/internet-bank.component';
import {GoodsComponent} from './goods/goods.component';
import {FooterComponent} from './footer/footer.component';

const appRoutes: Routes = [
  {path: 'send', component: PaymentSendComponent},
  {path: 'request', component: PaymentRecvComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PaymentComponent,
    PaymentSendComponent,
    PaymentRecvComponent,
    AnyCardComponent,
    InternetBankComponent,
    GoodsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
