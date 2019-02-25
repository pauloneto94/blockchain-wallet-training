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
  public bl: any;
  
  constructor(@Inject(BlockchainService) private blockchainService: BlockchainService) {}

  ngOnInit() {

    this.blockchain = this.blockchainService.blockchain;

    this.userPendingTransactions = this.blockchainService.blockchain.pendingTransactions.filter((transaction) => {

      return transaction.getByName('Paulo');

    });

      for(this.bl in this.blockchainService.blockchain.chain){

        this.userTransactions = this.bl.getTransactions().filter((transaction: any) =>{

          return transaction.getByName('Paulo');

        });

      }

    }


}
