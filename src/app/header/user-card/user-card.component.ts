import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  public isShow: boolean = true;
  public butttonText: string = 'Show text';

  public people = [
    {name: 'John', age: 24},
    {name: 'Tom', age: 27},
    {name: 'Ann', age: 28},
    {name: 'Edd', age: 31},
    {name: 'Jony', age: 30},
  ]

  @Input('colorName') colorName: string = '';
  @Input('cardName') cardName: any; // 'cardName' - atribute name

  constructor() { }

  ngOnInit() {
  }

  getShow() {
    if(this.isShow) {
      this.isShow = false;
      this.butttonText = 'Show text';
    }else {
      this.isShow = true;
      this.butttonText = 'Hide text';
    }
  }

}
