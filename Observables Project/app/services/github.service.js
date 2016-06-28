System.register(['angular2/core', 'angular2/http', 'rxjs/add/operator/map', 'rxjs/add/observable/forkJoin', 'rxjs/Observable'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, Observable_1;
    var GithubService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            GithubService = (function () {
                function GithubService(_http) {
                    this._http = _http;
                    this._urlUsers = "https://api.github.com/users/";
                }
                GithubService.prototype.getGithubInfoFor = function (username) {
                    var urlUsers = "" + this._urlUsers + username;
                    var urlFollowers = urlUsers + "/followers";
                    return Observable_1.Observable.forkJoin(this._http.get(urlUsers), this._http.get(urlFollowers)).map(function (res) {
                        return { userInfo: res[0].json(), userFollowers: res[1].json() };
                    });
                };
                GithubService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], GithubService);
                return GithubService;
            })();
            exports_1("GithubService", GithubService);
        }
    }
});
//# sourceMappingURL=github.service.js.map