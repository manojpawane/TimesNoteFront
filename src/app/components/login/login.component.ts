import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { HttpRequestService } from 'src/app/services/registration.service';
import * as jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
import { SocialAuthService } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  res;
  data;
  user: SocialUser;
  loggedIn: boolean;

  constructor(private fb: FormBuilder, private service: HttpRequestService, private router: Router, private authService: SocialAuthService) { 
  
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(this.user);
      this.data = user
        console.log('', this.data.idToken);
        localStorage.setItem('stoken', this.data.idToken);
        this.router.navigate(['dashboard']);   
    });
    

    
  }
  get email() {
    return this.loginForm.get('email')
  }
  get password() {
    return this.loginForm.get('password')
  }

  login() {
    this.service.login(
      this.loginForm.value
    ).subscribe(res => {
      this.res = res;
      localStorage.setItem('token', this.res.token);
      this.router.navigate(['dashboard']);
      //var decoded = jwt_decode(this.res.token);
      //console.log(decoded);
    }, err => {
      console.log(err);

    });
  }

}










