import { Component, OnInit, Input } from '@angular/core';
import { Transaction } from 'projects/blockchain/src/public_api';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  @Input() transaction: Transaction;
 
  constructor() { }

  ngOnInit() {
  }

}
