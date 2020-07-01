import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firebase';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

	user:any={};
	posts:any[]=[];

  constructor(public activatedroute:ActivatedRoute) { 
  	let id=this.activatedroute.snapshot.paramMap.get('id');
  	// console.log(id);

  	
  	this.getusersposts(id);
  	this.getprofile(id);
  }

  ngOnInit(): void {
  }

  getprofile(id:string){

  	let userid=id;
  	firebase.firestore().collection("users").doc(userid).get().then((snapshot)=>{
  		this.user=snapshot.data();
  		this.user.displayName = this.user.first_name + " " + this.user.last_name;
  		this.user.id=snapshot.id;
  		this.user.hobbies = this.user.hobbies.split(",");
  		// console.log(this.user);
  	}).catch((error)=>{
  		console.log("error");
  	})
  }
  getusersposts(id: string){
    firebase.firestore().collection("posts")
    .where("owner","==", id).get().then((data)=>{
      
      this.posts = data.docs;

    })
  }
}
