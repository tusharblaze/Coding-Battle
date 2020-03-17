import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFireDatabase} from '@angular/fire/database';
import {firebase} from '@firebase/app';
import {Observable} from 'rxjs';
import {user} from '../model/user.model';
import { Router } from '@angular/router';
import { error } from 'protractor';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user:Observable<firebase.User>;
  private authState: any;
  
  constructor(private auth:AngularFireAuth,private db:AngularFireDatabase,private route:Router) { 
    this.user = auth.authState;
  }

  authUser(){
    return this.user;
  }

  get currentUserId():string{
    return this.authState !== null ? this.authState.uid:'';
  }

  login(email:string,password:string){
    this.auth.auth.createUserWithEmailAndPassword(email,password).then((resolve)=>{
      let status = 'online';
      let userid = resolve.user.uid
      this.setUserStatus(status,userid);
      this.route.navigate(['chat']);
    })
  }

  signUpAsGoogle(){
    return this.auth.auth.signInWithRedirect(new auth.GoogleAuthProvider());
  }

  signUp(email:string,password:string,displayName:string)
  {
     return this.auth.auth.createUserWithEmailAndPassword(email,password).then((user)=>{
         this.authState = user;
         let status = 'online';
         let userid = user.user.uid;
         this.setUserData(email,displayName,status,userid);
     }).catch(error => console.log(error));
  }

  setUserData(email:string,displayName:string,status:string,userid){
    let path = `user/${userid}`;
    let data = {
      email:email,
      displayName:displayName,
      status:status
    };
    this.db.object(path).update(data).catch(error=>console.log(error));

  }
  setUserStatus(status:string,userid:any){
    let path = `user/${userid}`;
    let data = {
      status:status
    };
    this.db.object(path).update(data).catch(error=>console.log(error));

  }
}
