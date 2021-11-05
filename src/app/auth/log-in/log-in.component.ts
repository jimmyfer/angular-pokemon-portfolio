import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  encapsulation: ViewEncapsulation.None
})
export class LogInComponent implements OnInit {

  username: string = '';
  password: string = '';
  LoginMessage: string = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  loginPlayer(): void {
    this.LoginMessage = this.authService.logInPlayer(this.username, this.password);
  }

}
