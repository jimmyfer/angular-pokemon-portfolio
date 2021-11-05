import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {

  logged: boolean;
  signUp: boolean

  constructor ( private router: Router, private authService: AuthService) {
    this.logged = authService.logged;
    this.signUp = authService.singUp;
  }

}