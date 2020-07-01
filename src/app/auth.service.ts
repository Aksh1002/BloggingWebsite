
import { Injectable } from '@angular/core';


import * as firebase from 'firebase/app';
import 'firebase/auth';




@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(email:string,password:string){
  	 return firebase.auth().signInWithEmailAndPassword(email,password);
  }

  signup(name:string,email:string,password:string){
  		return new Promise((resolve,reject)=>{
  			 firebase.auth().createUserWithEmailAndPassword(email,password).then((response)=>{

      			let randomnumber=Math.floor(Math.random()*1000);	
  			 	
  			 	response.user.updateProfile({
  			 			displayName:name,
        				photoURL:"https://api.adorable.io/avatars/"+randomnumber
  			 	}).then(()=>{
  			 		resolve(response.user);
  			 	}).catch((error)=>{
  			 		reject(error);
  			 	})
  			 }).catch((error)=>{
  			 	reject(error);
  			 })
  		})
  		
  }
}
