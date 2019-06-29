import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  // isAuth() {
  //   return of(true);
  // }

  isAuth(arg) {
    return of(arg);
  }
}
