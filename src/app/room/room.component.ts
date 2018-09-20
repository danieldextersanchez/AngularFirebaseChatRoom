import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore'; 
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';


interface Message{
  username : string,
  message : string,
  // date : Date,
  // room : number
}


@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  MessageCollection: AngularFirestoreCollection<Message>
  messages: Observable<Message[]>
  username : string
  comment : string
  
  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.MessageCollection = this.afs.collection('messages');
    this.messages = this.MessageCollection.valueChanges();
  }

  submitcomment(){
    this.afs.collection('messages').add({ 'username' : this.username, 'message' : this.comment  })
  }

}
