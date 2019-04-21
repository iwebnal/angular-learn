import { Component, OnInit, Input } from '@angular/core';

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

  @Input('headerUser') headerUser: any;

  public myColor = '';
  // public myColor = 'green';
  public myBackground = 'blue';


  constructor() { 
    console.log('constructor: ', this.headerUser);
  }

  ngOnInit() {
    console.log('ngOnInit: ', this.headerUser);
  }

  random() {
    return Math.random();
  }

  changeColor(color) {
    this.myColor = color;
  }

  changeColorTarget(value) {
    console.log(value);
    this.myColor = value;
  }

}
