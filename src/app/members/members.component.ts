import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service'
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  providers: [AuthService]
})
export class MembersComponent implements OnInit {

  returnedArray = [];
  currentUser: string;

  constructor(public auth: AuthService, public db: AngularFirestore) { }

  ngOnInit(){
    // this.db.collection('users').valueChanges()
    // .subscribe(val => this.returnedArray = val);
    this.db.collection('users').snapshotChanges().subscribe(
      serviceItems => {
        this.returnedArray = [];
        serviceItems.forEach(a=>{
          let item:any = a.payload.doc.data();
          item.id = a.payload.doc.id;
          this.returnedArray.push(item);
        })
      }
    )

    this.currentUser = this.auth.userEmail;
  }

  gSignOut() {
    this.auth.signOut();
  }

  getCurrentUser() {
    console.log(this.auth.getUserEmail());
    // console.log(this.auth.currentUserId());
    // this.auth.currentUser();
  }

  // getDataOut() {
  //   console.log(this.returnedArray);
  // }

}
