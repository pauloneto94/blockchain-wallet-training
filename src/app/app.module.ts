import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TooltipModule } from 'ngx-bootstrap/tooltip'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Block, BlockchainService } from 'projects/blockchain/src/public_api';
import { SendTransactionComponent } from './send-transaction/send-transaction.component';
import { BalanceComponent } from './balance/balance.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BlockComponent } from './block/block.component';
import { MyTransactionsComponent } from './my-transactions/my-transactions.component';
import { TransactionComponent } from './transaction/transaction.component';
import { LoginComponent } from './login/login.component';
import { UserService } from 'projects/blockchain/src/lib/user.service';
import { UserPageComponent } from './user-page/user-page.component';

const GenesisProvider = () => {

  return new Block(1, 12312, [], 'GENESIS', '0ae1234', '00');

};

@NgModule({
  declarations: [
    AppComponent,
    SendTransactionComponent,
    BalanceComponent,
    DashboardComponent,
    BlockComponent,
    MyTransactionsComponent,
    TransactionComponent,
    LoginComponent,
    UserPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TooltipModule.forRoot()
  ],
  providers: [{provide: 'GENESIS_BLOCK', useFactory: GenesisProvider},
              BlockchainService, UserService],
              
  bootstrap: [AppComponent]
})
export class AppModule { }
