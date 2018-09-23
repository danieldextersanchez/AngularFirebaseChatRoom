import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { FirebaseService } from "../../service/firebase.service";
import { RoomMessage } from "../../interface/messages";




@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  messages : Observable<RoomMessage[]>
  username : string
  comment : string
  constructor(private firestore: FirebaseService) { }

  ngOnInit() {
    this.messages = this.firestore.getMessageList();
  }

  submitcomment(){
    this.firestore.addComment({ 'username' : this.username, 'message' : this.comment  });
    // this.afs.collection('messages').add({ 'username' : this.username, 'message' : this.comment  })
  }

}
