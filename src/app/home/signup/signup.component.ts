import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { resolve } from 'url';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  email:string;
  password:string;
  displayName:string;
  errorMsg:string;

  constructor(private authService:AuthService , private route:Router) { }

  ngOnInit() {
  }

  signUp(){
    let email = this.email;
    let password = this.password;
    let displayName = this.displayName;
    this.authService.signUp(email,password,displayName).then(resolve => this.route.navigate(['chat']) ).catch(error=> this.errorMsg = error.message);
  }
  loginGoogle(){
    this.authService.signUpAsGoogle().then(resolve => { this.route.navigate(['chat']);
                   console.log(resolve);
         } ).catch(error=> this.errorMsg = error.message);;
  }

}
