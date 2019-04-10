import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public user = {
    name: 'John',
    age: '34'
  }

  constructor() { }

  ngOnInit() {
  }

  public random() {
    return Math.random();
  }

}
