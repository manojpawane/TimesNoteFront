import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { HttpRequestService } from 'src/app/services/registration.service';
import * as jwt_decode from 'jwt-decode';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  res;
  constructor(private fb: FormBuilder, private service: HttpRequestService) { }



  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
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
      console.log('test:')
      console.log(res);
      this.res = res;
      var decoded = jwt_decode(this.res.token);
      console.log(decoded);
    }, err => {
      console.log(err);

    });
  }
}










