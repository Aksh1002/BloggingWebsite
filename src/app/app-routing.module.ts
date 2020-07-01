import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { MyblogsComponent } from './myblogs/myblogs.component';
import { ProfileComponent } from './profile/profile.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { ViewComponent } from './view/view.component';
import { AuthGuard } from './auth.guard';
import {LoguserGuard } from './loguser.guard';
const routes: Routes = [
	{path:'',redirectTo:'home',pathMatch:'full'},
	{path:'home',component:HomeComponent,canActivate:[LoguserGuard]},
	{path:'login',component:LoginComponent,canActivate:[LoguserGuard]},
	{path:'signup',component:SignupComponent,canActivate:[LoguserGuard]},
	{path:'myblogs',component:MyblogsComponent,canActivate:[AuthGuard]},
	{path:'profile/:id',component:ProfileComponent,canActivate:[AuthGuard]},
	{path:'editprofile/:id',component:EditprofileComponent,canActivate:[AuthGuard]},
	{path:'view/:postid',component:ViewComponent,canActivate:[AuthGuard]},

	{path:'**',redirectTo:'home'}
	]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
