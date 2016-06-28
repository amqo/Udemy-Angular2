System.register(['angular2/core', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent() {
                    this.archives = [
                        { year: 2016, month: 1 },
                        { year: 2016, month: 2 },
                        { year: 2016, month: 3 }
                    ];
                }
                HomeComponent = __decorate([
                    core_1.Component({
                        selector: 'home-page',
                        template: "\n      <h1>Home Page</h1>\n      <ul class=\"list-group\">\n        <li *ngFor=\"#archive of archives\" className=\"list-group-item\">\n          <a [routerLink]=\"[\n            'Archives', { year: archive.year, month: archive.month }\n          ]\">\n            {{ archive.year }}/{{ archive.month }}\n          </a>\n        </li>\n      </ul>\n    ",
                        directives: [router_1.RouterLink]
                    }), 
                    __metadata('design:paramtypes', [])
                ], HomeComponent);
                return HomeComponent;
            }());
            exports_1("HomeComponent", HomeComponent);
        }
    }
});
//# sourceMappingURL=home.component.js.map