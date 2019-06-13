import { Component, OnInit } from '@angular/core';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {

  public cars: Array<any>;

  constructor(private _carsService: CarsService) { }

  ngOnInit() {
    this.cars = this._carsService.getCars();
  }

}
