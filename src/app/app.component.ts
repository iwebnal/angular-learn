import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { ComponentFactoryResolver } from '@angular/core';

import { ItemDynamicComponent } from './item-dynamic/item-dynamic.component'
import { CarsListComponent } from './cars-list/cars-list.component';
import { CarsTableComponent } from './cars-table/cars-table.component';
import { CarsService } from './cars.service';
import { HttpClient } from '@angular/common/http';
import { Options } from 'selenium-webdriver';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CarsService]
})
export class AppComponent implements OnInit {

  public userId: number;
  public paramsNumber: number;
  
  public title:string = 'Parent component:';
  public myClass:string = 'red';

  public itemTitle:string =  'for Item component'

  constructor(
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private _http: HttpClient,
    private _router: Router
  ) {

    this.userId = 222;
    this.paramsNumber = 777;


    setTimeout(() => {
      this.myClass = 'blue';

      setTimeout(() => {
        this.myClass = 'green';
      }, 2000)
    
    }, 2000)

    _http.get('https://api.github.com/search/users').subscribe(results => {
      console.log(results);
    });

    _http.get('https://api.github.com/users').subscribe(results => {
      console.log(results);
    });

  }

  ngOnInit() {
    setTimeout(_ => {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ItemDynamicComponent); // create factory
      const componentRef = this.viewContainerRef.createComponent(componentFactory); // view dynamic component in DOM
    }, 3000);
  }

  goToUser(userId) {
    // this._router.navigate(['page3', userId], {skipLocationChange: true}); //1
    // this._router.navigateByUrl('page3/' + userId, {skipLocationChange: true}); //2
        this._router.navigateByUrl('page3/' + userId); //2
  }

}
