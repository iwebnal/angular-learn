
export class UserService {

  private headerUser = [
    {name: 'User_1', age: 24},
    {name: 'User_2', age: 27},
    {name: 'User_3', age: 28},
    {name: 'User_4', age: 31},
    {name: 'User_5', age: 30},
  ];

  constructor() { }

  public getAll() {
    return this.headerUser;
  }
}
