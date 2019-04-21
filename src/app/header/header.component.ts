import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public colorName: string = 'red';
  public cardName;
  public headerUser;
  
  // public headerUser = {
  //   name: 'Mike'
  // }

  constructor() {
    setTimeout(() => {
      this.cardName = {
        name: 'Card_1'
      }

      this.headerUser = {
        name: 'Mike'
      }

    }, 2000);
  }

  ngOnInit() {
  }


}