import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

  gSignin() {
    this.auth.googleSignin();
  }

}
