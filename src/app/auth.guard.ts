import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from './auth.service';
// import 'rxjs/add/observable/of';
// import { of } from 'rxjs';
// import { of } from 'rxjs/observable/of';


@Injectable()
export class AuthGuard implements CanActivate {
  
  constructor(
    private _authService: AuthService
  ) {

  }
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // return false;
    // return of(true);
    // return this._authService.isAuth();
    return this._authService.isAuth(true);
  }
}
