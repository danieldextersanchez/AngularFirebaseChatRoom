import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

//Angular Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { RoomComponent } from './room/room.component';

//Angular Material
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


var firebaseconfig = {
  apiKey: "AIzaSyBgAeG2uvRMSSB7FnKfPGTZNogrtuAOU74",
  authDomain: "chatroom-f2b0f.firebaseapp.com",
  databaseURL: "https://chatroom-f2b0f.firebaseio.com",
  projectId: "chatroom-f2b0f",
  storageBucket: "chatroom-f2b0f.appspot.com",
  messagingSenderId: "622730052233"
};


@NgModule({
  declarations: [
    AppComponent,
    RoomComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseconfig),
    AngularFirestoreModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
