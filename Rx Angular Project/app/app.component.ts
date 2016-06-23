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

  createDOMEventObservable() {
    var search = this.form.find('search');
    var observable = search.valueChanges;
    observable.debounceTime(400)
      .map(str => (<string>str).replace(' ', '-'))
      .subscribe(x => console.log(x));
  }

  createArrayObservables() {
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

  createDifferentObservables() {
    Observable.empty()
      .subscribe(x => console.log('From empty observable', x));
    Observable.range(1, 5)
      .subscribe(x => console.log('From range observable', x));
    Observable.fromArray([1, 2, 3])
      .subscribe(x => console.log('From array observable', x));
    Observable.of(1, 3, 5)
      .subscribe(x => console.log("From 'of' observable", x));
  }

  createIntervalObservable(seconds: number) {
    let observable = Observable.interval(seconds * 1000);
    observable
      .flatMap(x => {
        console.log("Calling the server to get the latest news at",x)
        //Here it would be an Observable.fromPromise using a service
        return Observable.of(["News 1", "News 2", "News 3"]);
      })
      .subscribe(news => console.log(news));
  }

  createForkObservables() {
    var userStream = Observable.of({
      userId: 1, username: 'Alberto'
    }).delay(2000);

    var tweetStream = Observable.of([
      1, 2 , 3, 4, 5
    ]).delay(1500);

    Observable.forkJoin(userStream, tweetStream)
      .map(joined => new Object({
        user: joined[0], tweets: joined[1]
      }))
      .subscribe(result => console.log("From fork join", result));
  }

  simulateErrorHandling() {
    var observable = Observable.throw(new Error("Something failed"));
    observable.subscribe(
      x => console.log(x),
      error => console.error(error)
    );
  }

  simulateErrorTryHandling() {
    var counter = 0;
    var ajaxCall = Observable.of('url')
      .flatMap(() => {
        if (++counter < 2)
          return Observable.throw(new Error("Request failed"));
        return Observable.of([1, 2, 3, "After retry"]);
      });

    ajaxCall.retry(3)
    .subscribe(
      x => console.log(x),
      error => console.error(error)
    );
  }

  simulateErrorTryCatchHandling() {
    var remoteDataStream = Observable.throw(new Error("Something failed"));
    // var remoteDataStream = Observable.of([4, 5, 6]);

    remoteDataStream.catch(err => {
      var localDataStream = Observable.of([1, 2, 3, "After catch"]);
      return localDataStream;
    }).subscribe(x => console.log(x));
  }

  simulateTimeoutObservable() {
    var remoteDataStream = Observable.of([1, 2, 3]).delay(5 * 1000);

    remoteDataStream.timeout(1 * 1000)
      .subscribe(
        x => console.log(x),
        error => console.error(error)
      );
  }

  createCompletedCallbackObservable() {
    Observable.throw(new Error("error"))
      .subscribe(
        x => console.log("From Completed error Observable", x),
        error => console.log(error),
        () => console.log("Completed error Observable")
      );

    Observable.fromArray([4, 6, 8])
      .subscribe(
        x => console.log("From Completed array Observable", x),
        error => console.log(error),
        () => console.log("Completed array Observable")
      );
  }

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      search: []
    });

    this.createDOMEventObservable();
    this.createArrayObservables();
    this.createDifferentObservables();
    this.createIntervalObservable(3600);
    this.createForkObservables();
    this.simulateErrorHandling();
    this.simulateErrorTryHandling();
    this.simulateErrorTryCatchHandling();
    this.simulateTimeoutObservable();
    this.createCompletedCallbackObservable();
  }
}
