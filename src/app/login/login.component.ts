import { Component, OnInit, Input, Inject } from '@angular/core';
import { UserService } from 'projects/blockchain/src/lib/user.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public usernameMessage: string;
  public passwordMessage: string;
  public successMessage: string;


  
  constructor(@Inject(UserService) private userService: UserService, private router: Router) {

    

   }

  ngOnInit() {
  }

  onLogin(username: string, password:string){

    this.usernameMessage = "";
    this.passwordMessage = "";
    this.successMessage = "";
    
    if( !this.userService.usernameIsValid(username)){
      
        this.usernameMessage = "Login field is mandatory";

    } else if(!this.userService.passwordIsValid(password)){
      
        this.passwordMessage = "Password field is mandatory";

    }else{

      this.userService.connectUser(username, password);
      this.successMessage = "Login Successful!";
      this.router.navigate(['/user-page']);

    }

    console.log(this.userService.username());

  }

}
