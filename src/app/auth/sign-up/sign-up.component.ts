import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  encapsulation: ViewEncapsulation.None
})
export class SignUpComponent implements OnInit {

  username: string = '';
  password: string = '';
  signUpMessage: string = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  signUpPlayer() {
   this.signUpMessage = this.authService.signUpPlayer(this.username, this.password);
   this.username = '';
   this.password = '';
  }

}
