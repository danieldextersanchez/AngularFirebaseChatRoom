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
  credential;
  constructor(private afs: AngularFirestore,private afAuth: AngularFireAuth) { }


  getMessageList(){
    this.MessageCollection = this.afs.collection('messages');
    this.messages = this.MessageCollection.valueChanges();
    return this.messages;
  }

  addComment(RoomMessage : RoomMessage){
    this.afs.collection('messages').add(RoomMessage);
  }
  login() {
    let what = this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).then(function(result){
      return result.credential;     
    } )
    this.credential = what;
  }
  logout() {
    this.afAuth.auth.signOut();
  }
  checklogin(){
    return this.afAuth;
  }  
  getcredential(){
    return this.credential;
  }
}
