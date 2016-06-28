System.register(['angular2/core', 'angular2/http', './services/github.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, github_service_1;
    var GithubProfileComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (github_service_1_1) {
                github_service_1 = github_service_1_1;
            }],
        execute: function() {
            GithubProfileComponent = (function () {
                function GithubProfileComponent(_githubService) {
                    this._githubService = _githubService;
                    this.isLoading = true;
                    this.userInfo = {};
                    this.userFollowers = [];
                }
                GithubProfileComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._githubService.getGithubInfoFor('octocat')
                        .subscribe(function (res) {
                        _this.userInfo = res.userInfo;
                        _this.userFollowers = res.userFollowers;
                    }, null, function () {
                        _this.isLoading = false;
                    });
                };
                GithubProfileComponent = __decorate([
                    core_1.Component({
                        selector: 'github-profile',
                        templateUrl: 'app/templates/github.template.html',
                        providers: [github_service_1.GithubService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [github_service_1.GithubService])
                ], GithubProfileComponent);
                return GithubProfileComponent;
            })();
            exports_1("GithubProfileComponent", GithubProfileComponent);
        }
    }
});
//# sourceMappingURL=github.component.js.map