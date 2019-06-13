import { Injectable } from '@angular/core';

@Injectable()
export class CarsService {

  constructor() { }

  public getCars(): Array<any> {
    return [
      {name: 'MB', year: 2018},
      {name: 'BMW', year: 2017},
      {name: 'OPEL', year: 2016},
      {name: 'Nissan', year: 2015},
      {name: 'WW', year: 2019}
    ];
  }
}
