import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  LoginWithCredentials(username: string,password: string): boolean {
    if( username == 'roxas' ) {
      return true;
    }
    return false;
  }

}
