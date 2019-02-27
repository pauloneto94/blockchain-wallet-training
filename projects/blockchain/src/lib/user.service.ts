import { Injectable } from '@angular/core';
import { Users } from './models/Users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: Users;
  
  constructor() {

    this.user = new Users();

   }

   connectUser(username: string, password: string){

    this.user.set(username, password);

   }

   username(): string{

    return this.user.username;

   }

   usernameIsValid(username: string): boolean{

    return username.length != 0;

   }

   passwordIsValid(password: string): boolean{

    return password.length != 0;

   }
}
