import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SendTransactionComponent } from './send-transaction/send-transaction.component';
import { BalanceComponent } from './balance/balance.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CanSendGuard } from './can-send.guard';
import { MyTransactionsComponent } from './my-transactions/my-transactions.component';
import { LoginComponent } from './login/login.component';
import { UserPageComponent} from './user-page/user-page.component';

const routes: Routes = [

  {path:'user-page', component: UserPageComponent, children: [
  {path:'send-transaction', component: SendTransactionComponent, canActivate: [CanSendGuard]},
  {path:'dashboard', component: DashboardComponent},
  {path:'my-transactions', component: MyTransactionsComponent} ]},
  {path:'login', component: LoginComponent},
  {path:'', redirectTo: '/login', pathMatch: 'full'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
