import { Component, OnInit } from '@angular/core';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-cars-table',
  templateUrl: './cars-table.component.html',
  styleUrls: ['./cars-table.component.css']
})
export class CarsTableComponent implements OnInit {

  public cars: Array<any>;

  constructor(private _carsService: CarsService) { }

  ngOnInit() {
    this.cars = this._carsService.getCars();
  }

}
