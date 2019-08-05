import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ItemLocacaoComponent } from './item-locacao/item-locacao.component';
import { OptionListComponent } from './option-list/option-list.component';
import { DetailsComponent } from './details/details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FinishedComponent } from './finished/finished.component';
import { ModalProdutoComponent } from './modal-produto/modal-produto.component';

const routes: Routes = [
    { path: '', redirectTo: '/types', pathMatch: 'full' },
    { path: 'types', component: ItemLocacaoComponent },
    { path: 'options', component: OptionListComponent },
    { path: 'details', component: DetailsComponent },
    { path: 'checkout', component: CheckoutComponent },
    { path: 'finished', component: FinishedComponent },
    { path: 'modal', component: ModalProdutoComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
