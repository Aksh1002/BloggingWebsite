import { Component, OnInit ,Input} from '@angular/core';

import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
	comment:string="";
	comments:any[]=[];
	loggedin:boolean=false;
	@Input("postid") postid:string;
  constructor() { 
  	firebase.auth().onAuthStateChanged((user)=>{
  		if(user){
  			this.loggedin=true;
  		}else{
  			this.loggedin=false;
  		}
  	})}

  ngOnInit(): void {
    this.getcomments();
  }

  postcomment(){
  	// if(this.comments.length<5){
  	// 	return;
  	// }

  	firebase.firestore().collection("comments").add({
      text: this.comment,
      post: this.postid,
      owner: firebase.auth().currentUser.uid,
      ownerName: firebase.auth().currentUser.displayName,
      created: firebase.firestore.FieldValue.serverTimestamp()
    }).then((data) => {
      // console.log("Comment is saved!")
      this.getcomments();
    }).catch((error) => {
      console.log(error);
    })
  }
  getcomments(){
    this.comments=[];
    firebase.firestore().collection("comments").where("post","==",this.postid).orderBy("created","desc").get().then((snapshot)=>{
      snapshot.docs.forEach((commentref)=>{
        this.comments.push(commentref.data())
      })
    })
  }

}
