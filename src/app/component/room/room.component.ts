import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FirebaseService } from "../../service/firebase.service";
import { RoomMessage } from "../../interface/messages";
import { Timestamp } from 'rxjs/internal/operators/timestamp';



@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  messages : Observable<RoomMessage[]>
  username : string
  comment : string
  Auth;
  Date : Date;
  constructor(private firestore: FirebaseService) { }
  
  
  
  ngOnInit() {
    let dateFormat = require('dateformat');
    let now = new Date();
    this.Date = dateFormat(now, "isoDateTime");

    
    this.messages = this.firestore.getMessageList();
  }

  submitcomment(){
    this.firestore.addComment({ 'username' : this.username, 'message' : this.comment, 'date' : this.Date });
    // this.afs.collection('messages').add({ 'username' : this.username, 'message' : this.comment  })
  }

}
