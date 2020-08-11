import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable(
    {
        providedIn: 'root'
    }
)

export class HttpRequestService{
    constructor(private _http:HttpClient){

    }
    add(user: any){
        return this._http.post('http://localhost:5000/user', user);
    }
}