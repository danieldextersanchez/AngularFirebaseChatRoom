import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore'; 
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { RoomMessage } from '../interface/messages';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { first, tap } from 'rxjs/operators';




@Injectable()
export class FirebaseService {
  MessageCollection: AngularFirestoreCollection<RoomMessage>
  messages: Observable<RoomMessage[]>
  username : string
  comment : string
  data ;
  constructor(private afs: AngularFirestore,private afAuth: AngularFireAuth) { }


  getMessageList(){
    this.MessageCollection = this.afs.collection('messages');
    this.messages = this.MessageCollection.valueChanges();
    return this.messages;
  }

  addComment(RoomMessage : RoomMessage){
    this.afs.collection('messages').add(RoomMessage)
  }
  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  logout() {
    this.afAuth.auth.signOut();
  }
  checklogin(){
    return this.afAuth.authState.pipe(first());
  }

  
}
