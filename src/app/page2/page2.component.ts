import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  constructor(private _route: ActivatedRoute) {
    this._route.queryParams.subscribe(params => console.log(params));
    
    this._route.data.subscribe(data => console.log(data));

    this._route.data.subscribe(data => console.log(data.user)); // {name: "John"}
  }

  ngOnInit() {
  }

}
