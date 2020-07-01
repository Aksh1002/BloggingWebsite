import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firebase';

@Component({
  selector: 'app-myblogs',
  templateUrl: './myblogs.component.html',
  styleUrls: ['./myblogs.component.css']
})
export class MyblogsComponent implements OnInit {
	user:any;
	posts:any[]=[];
  constructor() {
  this.user=firebase.auth().currentUser;
  this.getposts(); }

  ngOnInit(): void {
  }

  getposts(){
  	firebase.firestore().settings({
   	})
  	firebase.firestore().collection("posts").orderBy("created","desc").get().then((querysnapshot)=>{
  		// console.log(querysnapshot);
  		this.posts=querysnapshot.docs;
      // console.log(this.posts);
  	}).catch((error)=>{
  		console.log(error);
  	})

  }
  onpostcreated(){
  	this.posts=[];
    this.getposts();

  }

  ondelete()
{
   this.posts=[];
    this.getposts();

}
}
