import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public nameControl: FormControl;

  constructor() { }

  ngOnInit() {
    // this.nameControl = new FormControl('John', [Validators.required, Validators.minLength(5)]);
    // this.nameControl = new FormControl('John', [this.myValidator], [this.myAsyncValidator]);
    // this.nameControl = new FormControl('John', [], [this.myAsyncValidator]);
    this.nameControl = new FormControl('John', [], [this.myAsyncValidator(3)]);
    this.nameControl.valueChanges.subscribe((value) => console.log(value));
    this.nameControl.statusChanges.subscribe((status) => {
      console.log(this.nameControl.errors);
      console.log(status)
    });
  }

  myValidator(formControl:FormControl) {
    if(formControl.value.length < 3) {
      return {myValidator: {message: 'Should be something'} };
    }
    return null;
  }

  // myAsyncValidator(formControl:FormControl):Observable<null|any> {
  //   if(formControl.value.length < 3) {
  //     return of( {myAsyncValidator: {message: 'Should be something'}} );
  //   }
  //   return of(null);
  // }

  myAsyncValidator(number: Number) {
    return (formControl:FormControl):Observable<null|any> => {
      if(formControl.value.length < number) {
        return of( {myAsyncValidator: {message: 'Should be something'}} );
      }
      return of(null);
    }
  }

}
