import { Component, OnInit, Inject } from '@angular/core';
import { BlockchainService, Transaction, Blockchain, Block } from 'projects/blockchain/src/public_api';
import { UserService } from 'projects/blockchain/src/lib/user.service';

@Component({
  selector: 'app-my-transactions',
  templateUrl: './my-transactions.component.html',
  styleUrls: ['./my-transactions.component.scss']
})
export class MyTransactionsComponent implements OnInit {

  public userTransactions: Transaction[];
  public userPendingTransactions: Transaction[];
  public blockchain: Blockchain;
  public pendingMessage: string;
  public minedMessage: string;
 
  
  constructor(@Inject(BlockchainService) private blockchainService: BlockchainService, @Inject(UserService) private userService: UserService) {

    this.blockchain = this.blockchainService.blockchain;

  }

  ngOnInit() {
    
    this.userPendingTransactions = this.blockchainService.blockchain.pendingTransactions.filter((transaction) => {

      return transaction.getByName(this.userService.username());

    });

    if(this.userPendingTransactions.length === 0) this.pendingMessage="No pending Transactions";
    else this.pendingMessage="";

      for(const bl of this.blockchainService.blockchain.chain){

        this.userTransactions = bl.getTransactions().filter((transaction) =>{

          return transaction.getByName(this.userService.username());

        });

      }

      if(this.userTransactions.length === 0) this.minedMessage="No mined Transactions";
      else this.minedMessage="";

    
    
    }


}
