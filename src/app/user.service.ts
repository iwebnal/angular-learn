import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class UserService {

  private headerUser = [
    {name: 'User_1', age: 24},
    {name: 'User_2', age: 27},
    {name: 'User_3', age: 28},
    {name: 'User_4', age: 31},
    {name: 'User_5', age: 30},
  ];

  constructor(
    private _http: HttpClient
  ) { }

  public getAll() {
    return this._http.get('https://jsonplaceholder.typicode.com/users');
  }

  public remove(name: string) {
    return this.headerUser = this.headerUser.filter(item => item.name !== name);
  }

  public add(name: string, age: number = 333) {
    this.headerUser.push({ name, age });
  }

}
