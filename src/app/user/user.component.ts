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

  public myColor = 'green';

  constructor() { }

  ngOnInit() {
  }

  random() {
    return Math.random();
  }

  changeColor(color) {
    this.myColor = color;
  }

  // changeColorTarget() {
  //   (this.myColor === 'green') ?  this.myColor = 'yellow' : this.myColor = 'green';
  // }

}
