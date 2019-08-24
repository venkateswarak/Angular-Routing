import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class AuthService {
  loginAuth = false;

  isAuthenticated() {
  const promise = new Promise(
    (resolve, reject) => {
      setTimeout( () => {
        resolve (this.loginAuth);
      }, 2500 );
    }
  );
  return promise;
  }

  login() {
    this.loginAuth = true;
  }

  logout() {
    this.loginAuth = false;
  }
}

