import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'CodeBattle';

   constructor(){}
   ngOnInit(){
    const firebaseConfig = {
      apiKey: "AIzaSyBnzIs-QRu2HCSQkSvE2AH_KAejoJB-8oI",
      authDomain: "coding-battle-7bc92.firebaseapp.com",
      databaseURL: "https://coding-battle-7bc92.firebaseio.com",
      projectId: "coding-battle-7bc92",
      storageBucket: "coding-battle-7bc92.appspot.com",
      messagingSenderId: "686600914741",
      appId: "1:686600914741:web:2330a247284bf5c5af2e7c",
      measurementId: "G-DMN1YS2V8F"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
   }
  
}
