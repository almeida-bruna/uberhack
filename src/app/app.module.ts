import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemLocacaoComponent } from './item-locacao/item-locacao.component';
import { OptionListComponent } from './option-list/option-list.component';
import { DetailsComponent } from './details/details.component';
import { PaymentComponent } from './payment/payment.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FinishedComponent } from './finished/finished.component';
import { ModalProdutoComponent } from './modal-produto/modal-produto.component';

@NgModule({
  declarations: [AppComponent, ItemLocacaoComponent, OptionListComponent, DetailsComponent, PaymentComponent, CheckoutComponent, FinishedComponent, ModalProdutoComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
