/// <reference path="../typings/tsd.d.ts" />

import { Component } from 'angular2/core';
import { ControlGroup, FormBuilder } from 'angular2/common';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

@Component({
    selector: 'my-app',
    template: `
        <form [ngFormModel]="form">
          <input type="text" ngControl="search" />
        </form>
    `
})
export class AppComponent {

  form: ControlGroup;

  getDatesArray(dayWindow: number): Date[] {
    let startDates = [];
    let startDate = new Date();

    for (var day = -dayWindow; day <= dayWindow; ++day) {
      let date = new Date(
        startDate.getFullYear(),
        startDate.getMonth(),
        startDate.getDate() + day
      );
      startDates.push(date);
    }

    return startDates;
  }

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      search: []
    });

    var search = this.form.find('search');
    var observable = search.valueChanges;
    observable.debounceTime(400)
      .map(str => (<string>str).replace(' ', '-'))
      .subscribe(x => console.log(x));

    var arrayObservable = Observable.fromArray([1, 2, 3]);
    arrayObservable.subscribe(str => console.log('From array observable', str));

    var datesArray = this.getDatesArray(2);
    Observable.fromArray(datesArray)
      .map(date => {
        console.log('Getting deals for date', date);
        return ["Flight 1", "Flight 2", "Flight 3"];
      })
      .subscribe(x => console.log(x));
  }
}
