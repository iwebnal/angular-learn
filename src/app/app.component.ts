import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public title:string = 'Parent component:';
  public myClass:string = 'red';

  constructor() {

    setTimeout(() => {
      this.myClass = 'blue';

      setTimeout(() => {
        this.myClass = 'green';
      }, 2000)
    
    }, 2000)

  }



}
