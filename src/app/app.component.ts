import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { ComponentFactoryResolver } from '@angular/core';

import { ItemDynamicComponent } from './item-dynamic/item-dynamic.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  public title:string = 'Parent component:';
  public myClass:string = 'red';

  public itemTitle:string =  'for Item component'

  constructor(
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {

    setTimeout(() => {
      this.myClass = 'blue';

      setTimeout(() => {
        this.myClass = 'green';
      }, 2000)
    
    }, 2000)

  }

  ngOnInit() {
    setTimeout(_ => {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ItemDynamicComponent); // create factory
      const componentRef = this.viewContainerRef.createComponent(componentFactory); // view dynamic component in DOM
    }, 3000);
  }


}
