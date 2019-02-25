import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SendTransactionComponent } from './send-transaction/send-transaction.component';
import { BalanceComponent } from './balance/balance.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CanSendGuard } from './can-send.guard';
import { MyTransactionsComponent } from './my-transactions/my-transactions.component';

const routes: Routes = [

  {path:'send-transaction', component: SendTransactionComponent, canActivate: [CanSendGuard]},
  {path:'dashboard', component: DashboardComponent},
  {path:'my-transactions', component: MyTransactionsComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
