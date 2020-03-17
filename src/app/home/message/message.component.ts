import { Component, OnInit,Input } from '@angular/core';
import {ChatService} from '../services/chat.service';
import {ChatMsg} from '../model/chatmsg.model'
import {AngularFireAuth} from '@angular/fire/auth';


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input() chatMessage:ChatMsg;
  userEmail:string;
  userName:string;
  messageContent:string;
  timestamp:string;
  isOwnMessage:boolean;

  constructor() { }

  ngOnInit(chatMessage = this.chatMessage) {
   this.messageContent = chatMessage[0].message;
   this.userEmail = chatMessage[0].email;
   this.userName = chatMessage[0].username;
   this.timestamp = chatMessage[0].timesent;
  }

}
