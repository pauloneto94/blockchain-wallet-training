import { Component, OnInit, Input, Inject } from '@angular/core';
import { Block, Transaction } from 'projects/blockchain/src/public_api';
import { UserService } from 'projects/blockchain/src/lib/user.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent implements OnInit {

  @Input() chain: Block[];
  public owner: string;
  public value = 0;
  public balance: { owner: string, value: number };
  
  constructor(@Inject(UserService) private userService: UserService) { 

    this.owner = this.userService.username();

  }

  ngOnInit() {

    this.balance = { owner: this.owner, value: this.value };

  }

  getBalance() {
    
    
    const initial = new Transaction(0, this.owner, this.owner);
    let total = 0;
    this.chain.filter((block: Block) => {
    
      for (const transaction of block.transactions) {
    
        if ( transaction.recipient === initial.recipient) {
    
          total += Number(transaction.amount);
    
        }

        if ( transaction.sender === initial.sender) {
    
          total -= Number(transaction.amount);
    
        }
    
      }
    
    });
    
    this.value = total;
    
    this.balance = { owner: this.owner, value: this.value };  
  
  }

}
