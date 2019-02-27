
export class Users {

    public username: string;
    public password: string;

    constructor(){

    }

    getUsername(): string{

        return this.username;

    }

    set(username: string, password: string){

        this.username = username;
        this.password = password;

    }
}