import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  public isShow: boolean = true;
  public butttonText: string = 'Show text';

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
