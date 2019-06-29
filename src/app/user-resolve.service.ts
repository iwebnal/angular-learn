import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

interface IUser {
  name: string;
}

@Injectable()

export class UserResolveService implements Resolve<IUser> { 

  constructor() { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUser> {
    return of({name: 'John'});
  };
}
