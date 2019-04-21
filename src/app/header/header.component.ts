import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public colorName: string = 'red';
  public cardName;
  public userSelected;

  public headerUser = [
    {name: 'User_1', age: 24},
    {name: 'User_2', age: 27},
    {name: 'User_3', age: 28},
    {name: 'User_4', age: 31},
    {name: 'User_5', age: 30},
  ];

  constructor() {
    setTimeout(() => {
      this.cardName = {
        name: 'Card_1'
      }
    }, 2000);
  }

  ngOnInit() {
  }


}