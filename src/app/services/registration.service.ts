import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable(
  {
    providedIn: 'root'
  }
)

export class HttpRequestService {
  // tslint:disable-next-line: variable-name
  constructor(private _http: HttpClient) {

  }
  add(user: any) {
    return this._http.post('http://localhost:5000/user', user);
  }

  login(loginDetails: any) {
    return this._http.post('http://localhost:5000/user/login', loginDetails)
  }

  verify(verifyDetails: any){
    return this._http.post('http://localhost:5000/user/verify', verifyDetails)
  }
}
