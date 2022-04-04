import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss']
})
export class PrivateComponent implements OnInit {

  roleOptions: any[];
  roleChoosen: string = "user";
  role: string;

  constructor() {
    this.roleOptions = [
      { label: 'User', value: 'user' },
      { label: 'Agency', value: 'agency' },
      { label: 'Admin', value: 'admin' },
    ];
  }

  ngOnInit(): void {
    this.role = this.roleChoosen;
  }

  changeRole(): void {
    this.role = this.roleChoosen;
  }

}
