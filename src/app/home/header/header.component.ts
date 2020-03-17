import { Component, OnInit } from '@angular/core';
import {AuthService } from '../services/auth.service';
import {Observable} from 'rxjs';
import *  as firebase from 'firebase/app'

@Component({
  selector: 'app-home-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   
  users:Observable<firebase.User>;
  userEmail:string;
  constructor(private authService:AuthService) { }

  ngOnInit() {
    this.users = this.authService.authUser()
    this.users.subscribe(user=>{
       this.userEmail = user.email
    })
  
  }

  logout(){
    
  }

}
