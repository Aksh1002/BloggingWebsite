import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firebase';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
	user:any={};
	message:string;
  constructor() { 
  	this.getprofile();}

  ngOnInit(): void {
  }

  getprofile(){

  	let userid=firebase.auth().currentUser.uid;
  	firebase.firestore().collection("users").doc(userid).get().then((snapshot)=>{
  		this.user=snapshot.data();
  		this.user.displayName = this.user.first_name + " " + this.user.last_name;
  		this.user.id=snapshot.id;
  		// console.log(this.user);
  	}).catch((error)=>{
  		console.log(error);
  	})
  }

  update(){
  	this.message="updating profile..";

  	firebase.auth().currentUser.updateProfile({
  		displayName:this.user.displayName,
  		photoURL:this.user.photoURL
  	}).then(()=>{
  		let userid=firebase.auth().currentUser.uid;
  		firebase.firestore().collection("users").doc(userid).update({
  			first_name:this.user.displayName.split(' ')[0],
  			last_name:this.user.displayName.split(' ')[1],
  			hobbies:this.user.hobbies,
  			interests:this.user.interests,
  			bio:this.user.bio

  		}).then(()=>{
  			this.message="Profile Updated"
  		}).catch((error)=>{
  			console.log(error);
  		})
  	})
  }
}
