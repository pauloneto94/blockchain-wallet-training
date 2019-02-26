import { Component, OnInit, Inject } from '@angular/core';
import { BlockchainService, Transaction, Blockchain, Block } from 'projects/blockchain/src/public_api';

@Component({
  selector: 'app-my-transactions',
  templateUrl: './my-transactions.component.html',
  styleUrls: ['./my-transactions.component.scss']
})
export class MyTransactionsComponent implements OnInit {

  public userTransactions: Transaction[];
  public userPendingTransactions: Transaction[];
  public blockchain: Blockchain;
  public isValid1 = true;
 
  
  constructor(@Inject(BlockchainService) private blockchainService: BlockchainService) {

    this.blockchain = this.blockchainService.blockchain;

  }

  ngOnInit() {
    
    this.userPendingTransactions = this.blockchainService.blockchain.pendingTransactions.filter((transaction) => {

      return transaction.getByName('Paulo');

    });

      for(const bl of this.blockchainService.blockchain.chain){

        this.userTransactions = bl.getTransactions().filter((transaction) =>{

          return transaction.getByName('Paulo');

        });

      }

    }


}
