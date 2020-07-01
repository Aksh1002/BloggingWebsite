import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl,Validators } from '@angular/forms';


import { AuthService } from '../auth.service';
import { Router} from '@angular/router'


import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  myform:FormGroup;
  constructor(public fb:FormBuilder, public authService:AuthService,private router:Router) { 
    this.myform=this.fb.group({
      first_name:['',[Validators.required]],
      last_name:['',[Validators.required]],
      email:['',[Validators.required]],
      password:['',[Validators.required,Validators.minLength(8)]],
      confirmpassword:['',[Validators.required]]
    },{
      validator:this.checkconfirmpassword('password','confirmpassword')
    })
  }





   checkconfirmpassword( passwordkey:string,confirmpasswordkey:string){
    return (group:FormGroup) =>{
     let password=group.controls[passwordkey];
     let confirmpassword=group.controls[confirmpasswordkey];

     if(password.value==confirmpassword.value){
       return;
     }else{
       confirmpassword.setErrors({
         'passwordmismatch':true
       })
     }

    }
   }


  onsubmit(myform){
    let email:string=myform.value.email;
    let password:string=myform.value.password;
    let name:string=myform.value.first_name+" " +myform.value.last_name;

    this.authService.signup(name,email,password)
    .then((user:any)=>{

      firebase.firestore().collection("users").doc(user.uid).set({
        first_name: myform.value.first_name,
        last_name:myform.value.last_name,
        email:myform.value.email,
        photoURL:user.photoURL,
        interests:"",
        bio:"",
        hobbies:""
      }).then(()=>{
        alert('You Have Successfully Signed Up');
        this.router.navigate(['/myblogs'])
      })
     
   
    }).catch((error)=>{
      console.log(error);
      alert(error.message);
    })

  }
 
  ngOnInit(): void {
  }

  
}
