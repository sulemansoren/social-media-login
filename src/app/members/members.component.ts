import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service'

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  providers: [AuthService]
})
export class MembersComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

  gSignOut() {
    this.auth.signOut()
  }

}
