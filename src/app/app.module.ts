import { NgxEditorModule } from 'ngx-editor';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { MyblogsComponent } from './myblogs/myblogs.component';
import { ProfileComponent } from './profile/profile.component';
import { CreateComponent } from './create/create.component';
import { PostComponent } from './post/post.component';
import { ViewComponent } from './view/view.component';
import { CommentsComponent } from './comments/comments.component';
import { EditprofileComponent } from './editprofile/editprofile.component';


let firebaseConfig = {
  apiKey: "AIzaSyCLmwr8M1gxfLUht2t24xd_7yxgi-qkw2U",
  authDomain: "scribe-7e1ce.firebaseapp.com",
  databaseURL: "https://scribe-7e1ce.firebaseio.com",
  projectId: "scribe-7e1ce",
  storageBucket: "scribe-7e1ce.appspot.com",
  messagingSenderId: "912281240648",
  appId: "1:912281240648:web:a4344202b6d1ea7fafc47d",
  measurementId: "G-XXJQ7ZCN18"
};

firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    MyblogsComponent,
    ProfileComponent,
    CreateComponent,
    PostComponent,
    ViewComponent,
    CommentsComponent,
    EditprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEditorModule,
    HttpClientModule

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
