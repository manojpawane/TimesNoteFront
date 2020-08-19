import { Component, OnInit } from '@angular/core';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() {
    let myItem = localStorage.getItem('stoken');
    var decoded = jwt_decode(myItem);
    console.log(decoded);
  }

  ngOnInit(): void {
  }

}
