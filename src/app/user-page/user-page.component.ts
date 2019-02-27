import { Component, OnInit, Inject } from '@angular/core';
import { BlockchainService, Blockchain, Transaction } from 'projects/blockchain/src/public_api';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  constructor(@Inject(BlockchainService) private blockchainService: BlockchainService) { }

  ngOnInit() {
  }

  onMine(): boolean{

    return this.blockchainService.mine();

  }

}
