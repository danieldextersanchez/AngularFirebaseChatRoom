import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../service/firebase.service';
@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent implements OnInit {

  constructor(public fireservice : FirebaseService) { }

  ngOnInit() {
  }
  google(){
    this.fireservice.login();
  }

}
