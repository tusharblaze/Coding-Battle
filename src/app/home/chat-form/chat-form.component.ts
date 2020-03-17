import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';


@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.css']
})
export class ChatFormComponent implements OnInit {
   
  public message:string;
   
  constructor(private chat:ChatService) { }

  ngOnInit() {
  }
  
  send(field:any){
   this.chat.sendMessage(this.message);
   field.value = '';

  }

  handlesubmit(event,field)
  {
    if(event.keyCode === 13){
      this.send(field);
    }
  }

}
