import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FirebaseService } from "../../service/firebase.service";
import { RoomMessage } from "../../interface/messages";
import { format } from 'url';



@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  messages ;
  username : string
  comment : string
  Auth;
  Date : Date;
  constructor(private firestore: FirebaseService) { }
  
  
  
  ngOnInit() {
    let dateFormat = require('dateformat');
    let now = new Date();
    this.Date = dateFormat(now, "isoDateTime");
    this.firestore.getMessageList().subscribe((data)=>{
      let sorted = data;


      for(let j =0;j<sorted.length;j++){
        for(let i = 0; i < (sorted.length)-1; i ++){
          if(sorted[i]["date"] > sorted[i+1]["date"]  ){
            let temp = sorted[i+1];
            sorted[i+1] = sorted[i];
            sorted[i] = temp;
          }
        }
      }

      

      console.log(sorted);
      console.log(data);
      this.messages = sorted;    
    });
  }
   sortFunction(a, b) {
    if (a[0] === b[0]) {
        return 0;
    }
    else {
        return (a[0] < b[0]) ? -1 : 1;
    }
}

  asyncstore(data){
    console.log(data);
    this.Auth = data;
  }



  submitcomment(){
      this.firestore.checklogin().user.subscribe(x=>{
        if(x != null){
         this.firestore.addComment({ 'username' : x.email, 'message' : this.comment, 'date' : this.Date,'picture_url':x.photoURL });
        }else{
          alert("login first");
        }
      });
    }
    
  
}
