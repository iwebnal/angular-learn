import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public colorName: string = 'red';
  public cardName;
  public userSelected;

  public headerUser;
  // public headerUser = [
  //   {name: 'User_1', age: 24},
  //   {name: 'User_2', age: 27},
  //   {name: 'User_3', age: 28},
  //   {name: 'User_4', age: 31},
  //   {name: 'User_5', age: 30},
  // ];

  constructor( private _userService: UserService) {

    setTimeout(() => {
      this.cardName = {
        name: 'Card_1'
      }
    }, 2000);
  }

  ngOnInit() {
    this.headerUser = this._userService.getAll();
  }


}