import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpRequestService } from '../../services/registration.service';
import { Router } from '@angular/router';
import { variable } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-user-verification',
  templateUrl: './user-verification.component.html',
  styleUrls: ['./user-verification.component.css']
})
export class UserVerificationComponent implements OnInit {
  verifyForm: FormGroup;

  constructor(private fb: FormBuilder, private service: HttpRequestService, private router: Router) {

  }

  ngOnInit(): void {
    this.verifyForm = this.fb.group({
      email: ['', Validators.required]
    });
  }
  get email() {
    return this.verifyForm.get('email');
  }


  verify() {
    let userDetail = {
      token: document.URL.split('confirmation/')[1],
      email: this.verifyForm.value.email
    }
    this.service.verify(
      userDetail
    ).subscribe(res => {
      this.router.navigate(['login']);
      console.log(res);
    }, err => {
      console.log(err);
      alert(err.error.msg);
    });

  }
}
