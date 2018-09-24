//Providers
import { FirebaseService } from "./service/firebase.service";

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import{HttpClientModule} from '@angular/common/http';
//Angular Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { RoomComponent } from './component/room/room.component';
import { AngularFireAuth } from '@angular/fire/auth';
//Angular Material
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { UserListComponent } from './component/user-list/user-list.component';


import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { LoginComponent } from './component/login/login.component';
import { RegisterformComponent } from './component/registerform/registerform.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};




var firebaseconfig = {
  apiKey: "AIzaSyBgAeG2uvRMSSB7FnKfPGTZNogrtuAOU74",
  authDomain: "chatroom-f2b0f.firebaseapp.com",
  databaseURL: "https://chatroom-f2b0f.firebaseio.com",
  projectId: "chatroom-f2b0f",
  storageBucket: "chatroom-f2b0f.appspot.com",
  messagingSenderId: "622730052233"
};


const AppRoutes: Routes = [
  {
    path: '', component:HomeComponent
  },
  { 
    path: 'home', component: HomeComponent
   },
   {
    path: 'register', component: RegisterformComponent
   },
   {
    path: 'room',component:RoomComponent
   },
   {
     path: '**', component : NotfoundComponent
   }

 ]
@NgModule({
  declarations: [
    AppComponent,
    RoomComponent,
    NavbarComponent,
    HomeComponent,
    NotfoundComponent,
    UserListComponent,
    LoginComponent,
    RegisterformComponent,
    
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseconfig),
    AngularFirestoreModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes),
    HttpClientModule,
    PerfectScrollbarModule,
    
  ],
  providers: [
    FirebaseService,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    AngularFireAuth

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
