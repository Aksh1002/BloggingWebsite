import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import * as firebase from 'firebase/app';
import 'firebase/auth';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})



export class MenuComponent implements OnInit {
	loggedIn:boolean;
	user:any;


  constructor(private router:Router) { 
  	this.user=firebase.auth().currentUser;
    console.log(this.user);
  	if(this.user){
  		this.loggedIn=true;
  	}else{
  		this.loggedIn=false;
  	}

  	firebase.auth().onAuthStateChanged((user)=>{
      this.user=user;
  		if(user){
  		this.loggedIn=true;
  		}else{
  		this.loggedIn=false;
  		}
  	})
  }

  ngOnInit(): void {
  }

  logout(){
    this.loggedIn=false;
  	firebase.auth().signOut()
    this.router.navigate(['/login']);

  }
}


