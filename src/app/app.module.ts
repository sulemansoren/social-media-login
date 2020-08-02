import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MembersComponent } from './members/members.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { RouterModule } from '@angular/router';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AuthService } from './services/auth.service';
import { AppRoutingModule } from './app-routing.module'

const firebaseConfig = {
  apiKey: "AIzaSyAgmOwPc5pCr7DQWN3oGAt47Bc8fDRBRQU",
  authDomain: "social-media-login-db78f.firebaseapp.com",
  databaseURL: "https://social-media-login-db78f.firebaseio.com",
  projectId: "social-media-login-db78f",
  storageBucket: "social-media-login-db78f.appspot.com",
  messagingSenderId: "104866637425",
  appId: "1:104866637425:web:69f1a787b6c8ed939e5dd0"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AppRoutingModule
    // RouterModule.forRoot([
    //   {path: 'login-page', component: LoginComponent},
    //   {path: 'members-page', component: MembersComponent},
    //   {path: '', redirectTo: '/login-page', pathMatch: 'full'},
    // ]),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
