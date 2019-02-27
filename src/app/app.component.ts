import { Component, Inject } from '@angular/core';
import { BlockchainService, Blockchain, Transaction } from 'projects/blockchain/src/public_api';
import { UserService } from 'projects/blockchain/src/lib/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'PJChain';
  public blockchain: Blockchain;
  public isValid: boolean;
  public userLogged: string;

  constructor(@Inject(BlockchainService) private blockchainService: BlockchainService, @Inject(UserService) private userService: UserService){

    this.blockchain = this.blockchainService.blockchain;

    this.isValid = this.blockchain.isValidChain(this.blockchain);

  }



}
