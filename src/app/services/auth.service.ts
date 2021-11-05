import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

interface Accounts {
  user: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _logged: boolean = false;
  private _signUp: boolean;
  private _accounts: string = '';
  private _accountsStore: Accounts[] = [];

  constructor(private router: Router) {
    (router.url === '/signup') ? this._signUp = true : this._signUp = false;
    this.setAccounts();
    console.log(this._accountsStore)
  }

  get logged(): boolean {
    return this._logged;
  }

  toggleLogged(): void {
    this._logged = !this.logged;
  }

  get singUp(): boolean {
    if ((this.router.url === '/signup')) {
      this.toggleSingUp(true);
    }else {
      this.toggleSingUp(false);
    }
    return this._signUp;
  }

  toggleSingUp(signup: boolean): void {
    this._signUp = signup;
  }

  SignUpPlayer(user: string, password: string): string {
    if (this.accountExist(user)) {
      return 'Account Exist!';
    }
    window.localStorage.setItem('accounts', this._accounts + 'user:' + user + '&' + 'password:' + password + '-')
    return 'Successful registration!';
  }

  setAccounts() {
    let i: number = 0;
    if (localStorage.getItem('accounts')) {
      this._accounts = window.localStorage.getItem('accounts')!
      this._accounts.split('-').forEach(item => {
        if (!(item == '')) {
          this._accountsStore.push({user: '', password: ''});
        }
        item.split('&').forEach( item => {
          if(item.split(':')[0] === 'user') {
            this._accountsStore[i].user = item.split(':')[1];
          }
          if(item.split(':')[0] === 'password') {
            this._accountsStore[i].password = item.split(':')[1];
          }
        })
        i++;
      });
     }
  }

  accountExist(user: string): boolean {
    let trueOrNot: boolean = false;
    this._accountsStore.forEach(account => {
      if (account.user == user) {
        trueOrNot = true;
      }
    })
    if (trueOrNot) {
      return true;
    }
    return false;
  }

}