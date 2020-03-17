import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import{AngularFireModule} from'@angular/fire';
import{AngularFireDatabaseModule} from'@angular/fire/database';
import{AngularFireAuthModule} from'@angular/fire/auth';
import{environment} from'../../environments/environment';

import { HomeRoutingModule } from './home-routing.module';
import { PortfolioComponent } from './portfolio/portfolio.component';
import {LoginComponent} from'./login/login.component';
import {MatButtonModule, MatFormFieldModule, MatCardModule,MatInputModule,  MatIconModule, MatCheckboxModule, MatRadioModule,} from'@angular/material';
import {FormsModule, ReactiveFormsModule} from'@angular/forms';
import { ChatFormComponent } from './chat-form/chat-form.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { MessageComponent } from './message/message.component';
import { SignupComponent } from './signup/signup.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserItemComponent } from './user-item/user-item.component';

import { RouterModule } from '@angular/router';

import{AuthService} from'./services/auth.service';
import{ChatService} from'./services/chat.service';

import { FeedComponent } from './feed/feed.component';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [HeaderComponent,HomeComponent,PortfolioComponent, LoginComponent,FeedComponent, ChatFormComponent, ChatroomComponent, MessageComponent, SignupComponent, UserListComponent, UserItemComponent, ProfileComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    RouterModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatCheckboxModule,
    MatCardModule,
    ReactiveFormsModule,
    MatRadioModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers:[AuthService,ChatService]

})
export class HomeModule { }
