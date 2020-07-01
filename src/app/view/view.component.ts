import { Component, OnInit, NgZone } from '@angular/core';

import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import { ActivatedRoute } from '@angular/router'; 






@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
	post:any={};
  pdata:string="";
	innerHTML:any;
  postid:string;
  constructor(private activatedroute:ActivatedRoute, public ngzone:NgZone) {
  	let postid=this.activatedroute.snapshot.paramMap.get('postid');
    this.postid=postid;
  	firebase.firestore().collection("posts").doc(postid).get().then((snapshot)=>{
  		this.ngzone.run(()=>{
  			this.post=snapshot.data();
        this.pdata=this.post.contenttext.content[0].content[0].text;
  		// console.log(this.post)
  	});
  	}).catch((error)=>{
  		console.log(error);
  	})
  }

  ngOnInit(): void {
  }

}
