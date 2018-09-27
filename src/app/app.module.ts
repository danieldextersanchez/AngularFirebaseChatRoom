import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoomComponent } from './component/room/room.component';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import{HttpClientModule} from '@angular/common/http';


//Angular Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseService } from "./service/firebase.service";
import { AngularFireAuthModule } from '@angular/fire/auth';


//Angular Material
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';

//Components
import { NotfoundComponent } from './notfound/notfound.component';
import { UserListComponent } from './component/user-list/user-list.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterformComponent } from './component/registerform/registerform.component';
import { HomeComponent } from './component/home/home.component';

import { NavbarComponent } from './component/navbar/navbar.component';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

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
}




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
    HomeComponent,
    NotfoundComponent,
    UserListComponent,
    LoginComponent,
    RegisterformComponent,
    NavbarComponent
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
    AngularFireAuthModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatGridListModule
    
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
