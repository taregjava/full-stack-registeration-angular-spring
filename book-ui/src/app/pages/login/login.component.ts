import {Component} from '@angular/core';
import {Router} from '@angular/router';
@Component({
selector: 'app-login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  authRequest: AuthenticationRequest = {email: '', password: ''};
  errorMsg: Array<String> = [];

  login(){
}
register(){

}
}
