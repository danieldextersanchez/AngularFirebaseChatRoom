import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

//Interface
import { RoomMessage } from '../interface/messages';
//Authentication
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
//Data
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable()
export class FirebaseService {
  MessageCollection: AngularFirestoreCollection<RoomMessage>
  messages: Observable<RoomMessage[]>
  username : string
  comment : string
  token;
  user;
  constructor(private afs: AngularFirestore,private afAuth: AngularFireAuth) { }


  getMessageList(){
    this.MessageCollection = this.afs.collection('messages');
    this.messages = this.MessageCollection.valueChanges();
    return this.messages;
  }

  addComment(RoomMessage : RoomMessage){
    this.afs.collection('messages').add(RoomMessage);
    console.log(this.afAuth.auth);
  }
  login() {
    let what = this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).then(function(result){
      // this.token = result.credential.accessToken;
      // this.user = result.user;
      window.location.reload(true);
    } )
  }
  logout() {
    this.afAuth.auth.signOut();
    window.location.reload(true);
  }
  checklogin(){
    return this.afAuth;
  }
}
