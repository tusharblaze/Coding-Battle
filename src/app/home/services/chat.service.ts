import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList} from "@angular/fire/database";
import {AngularFireAuth} from'@angular/fire/auth';
import {Observable, observable} from'rxjs';
import * as firebase from'@angular/fire';
import {AuthService} from '../services/auth.service';
 
import {ChatMsg} from '../model/chatmsg.model'
import {Users} from '../model/usersdb.model';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  user:any;
  l:string;
  users:Users[];
  usernames:string[];
  chatMsgs:AngularFireList<ChatMsg[]>;
  chatMsg:ChatMsg;
  username:Observable<string>;



  constructor(private db:AngularFireDatabase,private auth:AngularFireAuth) {
    this.auth.authState.subscribe(auth=>{
      if(auth !== undefined && auth !== null){
        this.user = auth;
      }
      this.getUser().valueChanges().subscribe(a=>{
           this.username = a['displayName']; 
      });
    });

   }

   getUser(){
     let userId = this.user.uid;
     let path = `/user/${userId}`;
     return this.db.object(path);
   }
   getUsers(){
    let path = `/user`;
    return this.db.list(path);
  }

  sendMessage(msg:string){
     const timestamp = this.getTimeStamp();
     const  email = this.user.email;
     //const email ="tusharblaze6@gmail.com"
      this.chatMsgs = this.getMessages();
     this.chatMsgs.push([{
      message : msg,
      timesent: timestamp,
      username: this.username,
      email:email
    }]);
 
  
  }
  getTimeStamp(){
    const now = new Date();
    const date = now.getUTCFullYear() + '/' +(now.getUTCMonth() + 1)+ '/' + now.getUTCDate();
    const time = now.getUTCHours() + ':' + now.getUTCMinutes() + ':' + now.getUTCSeconds();
    return (date+' '+time);
   }

   getMessages(): AngularFireList<ChatMsg[]> {
    return this.db.list('messages', ref => {
      return ref.limitToLast(5).orderByKey();
    });
  }

}
