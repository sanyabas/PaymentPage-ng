import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';


import {AppComponent} from './app.component';
import {HeaderComponent} from './payment-page/header/header.component';
import {PaymentComponent} from './payment-page/payment/payment.component';
import {PaymentSendComponent} from './payment-page/payment/payment-send/payment-send.component';
import {PaymentRecvComponent} from './payment-page/payment/payment-recv/payment-recv.component';
import {AnyCardComponent} from './payment-page/payment/payment-send/any-card/any-card.component';
import {InternetBankComponent} from './payment-page/payment/payment-send/internet-bank/internet-bank.component';
import {GoodsComponent} from './payment-page/goods/goods.component';
import {FooterComponent} from './payment-page/footer/footer.component';
import {PaymentSendRoutingModule} from './payment-page/payment/payment-send/payment-send-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BankingService} from './banking-service.service';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './admin/login/login.component';
import { CardsLogComponent } from './admin/logs/cards-log/cards-log.component';
import { RequestsLogComponent } from './admin/logs/requests-log/requests-log.component';
import { LogsComponent } from './admin/logs/logs.component';

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
    FooterComponent,
    PaymentPageComponent,
    AdminComponent,
    LoginComponent,
    CardsLogComponent,
    RequestsLogComponent,
    LogsComponent
  ],
  imports: [
    BrowserModule,
    // PaymentSendRoutingModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [BankingService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
