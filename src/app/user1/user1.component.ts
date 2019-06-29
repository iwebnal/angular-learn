import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Event, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-user1',
  templateUrl: './user1.component.html',
  styleUrls: ['./user1.component.css']
})
export class User1Component implements OnInit {

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
    ) {

    this._route.params.subscribe(params => console.log(params));
  
    this._router.events.subscribe((event: Event) => {
      if(event instanceof NavigationStart) {
        console.log(event);
      }
    })
  }

  ngOnInit() {
  }

}
