import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user1',
  templateUrl: './user1.component.html',
  styleUrls: ['./user1.component.css']
})
export class User1Component implements OnInit {

  constructor(private _route: ActivatedRoute) {
    this._route.params.subscribe(params => console.log(params));
  }

  ngOnInit() {
  }

}
