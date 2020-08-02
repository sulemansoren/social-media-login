import { Component } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService]
})
export class AppComponent {

  constructor(public auth: AuthService) {}

  title = 'social-media-login';
}
