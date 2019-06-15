import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    CarsListComponent
  ],
  entryComponents: [ItemDynamicComponent],
  imports: [
    BrowserModule,
    HttpClientModule
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
