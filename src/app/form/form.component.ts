import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormArray } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public nameControl: FormControl;
  public fullnameControl: FormGroup;
  public userListControl: FormGroup;

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

    this.fullnameControl = new FormGroup({
      firstName: new FormControl,
      lastName: new FormControl
    });

    this.fullnameControl.valueChanges.subscribe((value) => console.log(value));

    this.userListControl = new FormGroup({
      users: new FormArray([
        new FormControl('Alice'),
        new FormControl('Bob'),
        new FormControl('John')
      ])
    });

    this.userListControl.valueChanges.subscribe((value) => console.log(value));

  }

  public removeUserControl(index) {
    (this.userListControl.controls['users'] as FormArray).removeAt(index);
  }

  public addUserControl() {
    (this.userListControl.controls['users'] as FormArray).push(new FormControl(''));
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
