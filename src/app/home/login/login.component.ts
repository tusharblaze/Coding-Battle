import { Component, OnInit } from '@angular/core';
import{FormGroup, FormControl, FormBuilder, Validators ,AbstractControl} from'@angular/forms';
import{users} from'../../shared/userlogin.model';
import{userRegister} from'../../shared/registerUser.model';
import{AngularFireDatabase} from '@angular/fire/database'
import{Observable} from'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  


  constructor() { 
   
  }

  ngOnInit() {
  }

}
