/// <reference path="../typings/tsd.d.ts" />
System.register(['angular2/core', 'angular2/common', 'rxjs/Rx'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, Rx_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(fb) {
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
                }
                AppComponent.prototype.getDatesArray = function (dayWindow) {
                    var startDates = [];
                    var startDate = new Date();
                    for (var day = -dayWindow; day <= dayWindow; ++day) {
                        var date = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + day);
                        startDates.push(date);
                    }
                    return startDates;
                };
                AppComponent.prototype.createDOMEventObservable = function () {
                    var search = this.form.find('search');
                    var observable = search.valueChanges;
                    observable.debounceTime(400)
                        .map(function (str) { return str.replace(' ', '-'); })
                        .subscribe(function (x) { return console.log(x); });
                };
                AppComponent.prototype.createArrayObservables = function () {
                    var arrayObservable = Rx_1.Observable.fromArray([1, 2, 3]);
                    arrayObservable.subscribe(function (str) { return console.log('From array observable', str); });
                    var datesArray = this.getDatesArray(2);
                    Rx_1.Observable.fromArray(datesArray)
                        .map(function (date) {
                        console.log('Getting deals for date', date);
                        return ["Flight 1", "Flight 2", "Flight 3"];
                    })
                        .subscribe(function (x) { return console.log(x); });
                };
                AppComponent.prototype.createDifferentObservables = function () {
                    Rx_1.Observable.empty()
                        .subscribe(function (x) { return console.log('From empty observable', x); });
                    Rx_1.Observable.range(1, 5)
                        .subscribe(function (x) { return console.log('From range observable', x); });
                    Rx_1.Observable.fromArray([1, 2, 3])
                        .subscribe(function (x) { return console.log('From array observable', x); });
                    Rx_1.Observable.of(1, 3, 5)
                        .subscribe(function (x) { return console.log("From 'of' observable", x); });
                };
                AppComponent.prototype.createIntervalObservable = function (seconds) {
                    var observable = Rx_1.Observable.interval(seconds * 1000);
                    observable
                        .flatMap(function (x) {
                        console.log("Calling the server to get the latest news at", x);
                        //Here it would be an Observable.fromPromise using a service
                        return Rx_1.Observable.of(["News 1", "News 2", "News 3"]);
                    })
                        .subscribe(function (news) { return console.log(news); });
                };
                AppComponent.prototype.createForkObservables = function () {
                    var userStream = Rx_1.Observable.of({
                        userId: 1, username: 'Alberto'
                    }).delay(2000);
                    var tweetStream = Rx_1.Observable.of([
                        1, 2, 3, 4, 5
                    ]).delay(1500);
                    Rx_1.Observable.forkJoin(userStream, tweetStream)
                        .map(function (joined) { return new Object({
                        user: joined[0], tweets: joined[1]
                    }); })
                        .subscribe(function (result) { return console.log("From fork join", result); });
                };
                AppComponent.prototype.simulateErrorHandling = function () {
                    var observable = Rx_1.Observable.throw(new Error("Something failed"));
                    observable.subscribe(function (x) { return console.log(x); }, function (error) { return console.error(error); });
                };
                AppComponent.prototype.simulateErrorTryHandling = function () {
                    var counter = 0;
                    var ajaxCall = Rx_1.Observable.of('url')
                        .flatMap(function () {
                        if (++counter < 2)
                            return Rx_1.Observable.throw(new Error("Request failed"));
                        return Rx_1.Observable.of([1, 2, 3, "After retry"]);
                    });
                    ajaxCall.retry(3)
                        .subscribe(function (x) { return console.log(x); }, function (error) { return console.error(error); });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <form [ngFormModel]=\"form\">\n          <input type=\"text\" ngControl=\"search\" />\n        </form>\n    "
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map