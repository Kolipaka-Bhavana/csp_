import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title="enter your valid details";
  isLoggedIn=false;
  username="";
  password="";
  items=[' you have registered '];
color="red";


  login()
  {
    this.isLoggedIn=true;
  }
  submit(){
    this.isLoggedIn=false;
  }
}