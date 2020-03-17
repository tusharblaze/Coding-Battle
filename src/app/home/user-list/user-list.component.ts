import { Component, OnInit } from '@angular/core';
import {ChatService } from '../services/chat.service';
import {Observable} from 'rxjs';
import {AngularFireList} from '@angular/fire/database'
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
   
  users:unknown[];
  constructor(private chat:ChatService) { }

  ngOnInit() {
    this.chat.getUsers().valueChanges().subscribe(a=>{
      this.users = a;
    })
  }
}
