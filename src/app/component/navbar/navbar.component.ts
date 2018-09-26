import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../../service/firebase.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})



export class NavbarComponent implements OnInit {
  logindata = {} ;
  Auth;
  constructor(private router : Router, private fbs : FirebaseService) { }
  ngOnInit(){
    this.Auth = this.fbs.checklogin();
  }

  goto(val){
    this.router.navigate([ val ]);
  }

  logout(){
    this.fbs.logout();
  }

  login(){
    this.fbs.login();
    
  }


  


}
