import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore'; 
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { RoomMessage } from '../interface/messages';


interface Message{
  username : string,
  message : string,
  // date : Date,
  // room : number
}


@Injectable()
export class FirebaseService {
  MessageCollection: AngularFirestoreCollection<Message>
  messages: Observable<Message[]>
  username : string
  comment : string
  constructor(private afs: AngularFirestore) { }


  getMessageList(){
    this.MessageCollection = this.afs.collection('messages');
    this.messages = this.MessageCollection.valueChanges();
    return this.messages;
  }

  addComment(RoomMessage : RoomMessage){
    this.afs.collection('messages').add(RoomMessage)
  }
}
