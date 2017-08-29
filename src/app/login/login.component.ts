import { Component, OnInit,Inject } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  username = "";
  password = "";

  constructor(@Inject('auth') private service) { }
  
  onSubmit(formValue) {
    console.log(`auth result is:${this.service.LoginWithCredentials(formValue.login.username,formValue.login.password)}`);
  }
  
  onFocus() {
    this.password = "";
  }
  
  ngOnInit() {
  }

}
