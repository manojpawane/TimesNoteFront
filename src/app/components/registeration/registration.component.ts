import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpRequestService } from '../../services/registration.service';
import { from } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html'
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private service: HttpRequestService, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['thisisName', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

  }
  get name() {
    return this.registerForm.get('name');
  }
  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  register() {
    this.service.add(
      this.registerForm.value
    ).subscribe(res => {
      this.router.navigate(['login']);
      console.log(res);

    });
  }
}
