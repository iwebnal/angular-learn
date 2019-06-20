import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './header/header.component';
import { UserCardComponent } from './header/user-card/user-card.component';
import { ItemComponent } from './item/item.component';
import { ColoryDirective } from './colory.directive';
import { DelayDirective } from './delay.directive';
import { ItemDynamicComponent } from './item-dynamic/item-dynamic.component';
import { UserService } from './user.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CarsTableComponent } from './cars-table/cars-table.component';
import { CarsListComponent } from './cars-list/cars-list.component';
import { Myinterceptor } from './myinterceptor.service';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { User1Component } from './user1/user1.component';

const routes = [
  {path: 'page1', component: Page1Component},
  {
    path: 'page2',
    data: {
      title: 'Page 2',
      pageAnotherParam: 'qqqqqqqq'
    },
    component: Page2Component},
  {path: 'page3/:userId', component: User1Component}
]


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HeaderComponent,
    UserCardComponent,
    ItemComponent,
    ColoryDirective,
    DelayDirective,
    ItemDynamicComponent,
    CarsTableComponent,
    CarsListComponent,
    Page1Component,
    Page2Component,
    User1Component
  ],
  entryComponents: [ItemDynamicComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Myinterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
