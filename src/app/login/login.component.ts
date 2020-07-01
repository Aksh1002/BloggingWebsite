import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms'
import { AuthService } from '../auth.service';
import { Router} from '@angular/router'



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	myform:FormGroup;
  constructor( public fb:FormBuilder,public authService:AuthService,public router:Router) { 
  	 this.myform=this.fb.group({
      email:['',[Validators.required]],
      password:['',[Validators.required,Validators.minLength(8)]],
    
    })
  }

  ngOnInit(): void {
  }

  onsubmit(myform){
  	let email:string=myform.value.email;
    let password:string=myform.value.password;

 this.authService.login(email,password).then((response)=>{
  	// console.log(response);

  	alert("you are logged in");
    this.router.navigate(['/myblogs'])
  }).catch((error)=>{
  	console.log(error);
  	alert(error.message);
  })
  }

}
