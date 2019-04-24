import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appColory]',
  exportAs: 'colory'
})
export class ColoryDirective {

  private counter: number = 0;

  @HostBinding('style.color') myColor:string;
  
  // Choose color after click event
  @HostListener('click', ['$event']) changeColor(event) {
    this.setRandomColor();
    this.counter++;
    console.log('counter: ', this.counter);
  }

  constructor() {
    this.myColor = 'red';
    setTimeout(_ => {
      this.myColor = 'green';
    }, 3000);
  }

  setRandomColor() {
    this.myColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

}
