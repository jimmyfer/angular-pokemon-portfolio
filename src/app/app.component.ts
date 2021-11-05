import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  signUp: boolean

  constructor ( private router: Router, private authService: AuthService) {
    this.signUp = authService.singUp;
  }

  get logged() {
    return this.authService.logged;
  }

}