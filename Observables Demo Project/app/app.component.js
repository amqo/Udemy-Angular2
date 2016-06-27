/// <reference path="../typings/tsd.d.ts" />
System.register(['angular2/core', 'angular2/http', 'rxjs/Rx', './services/post.service', './services/spotify.service', './services/github.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, Rx_1, post_service_1, spotify_service_1, github_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (post_service_1_1) {
                post_service_1 = post_service_1_1;
            },
            function (spotify_service_1_1) {
                spotify_service_1 = spotify_service_1_1;
            },
            function (github_service_1_1) {
                github_service_1 = github_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_spotifyService, _postService, _githubService) {
                    this._spotifyService = _spotifyService;
                    this._postService = _postService;
                    this._githubService = _githubService;
                    this.isLoading = true;
                    this.isLoadingGithub = true;
                    this.userInfo = {};
                    this.userFollowers = [];
                    // this._postService.createPost(
                    //   {userId: 1, title: "a", body: "b"}
                    // );
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.getPostsFromService();
                    this.initSearchInput();
                    this.initGithubSearchInput();
                };
                AppComponent.prototype.getPostsFromService = function () {
                    var _this = this;
                    this._postService.getPosts()
                        .subscribe(function (posts) {
                        setTimeout(function () { return _this.isLoading = false; }, 500);
                        _this.content = posts[0].body;
                    });
                    this._postService.getPostsPromise()
                        .then(function (posts) {
                        setTimeout(function () { return _this.isLoading = false; }, 500);
                        console.log(posts[0].body);
                    });
                };
                AppComponent.prototype.initGithubSearchInput = function () {
                    var _this = this;
                    this._githubService.getGithubInfoFor('octocat')
                        .subscribe(function (res) {
                        _this.userInfo = res.userInfo;
                        _this.userFollowers = res.userFollowers;
                    }, null, function () {
                        _this.isLoadingGithub = false;
                    });
                    ;
                };
                AppComponent.prototype.initSearchInput = function () {
                    var keyups = Rx_1.Observable.fromEvent($("#search"), "keyup")
                        .map(function (event) { return event.target.value; })
                        .filter(function (term) { return term.length > 2; })
                        .debounceTime(400)
                        .distinctUntilChanged()
                        .flatMap(this._spotifyService.searchArtists);
                    var subscription = keyups.subscribe(function (result) { return console.log(result); });
                    // To unsubscribe from notifications:
                    // subscription.unsubscribe();
                    // var debounced = _.debounce(text => {
                    //   var url = `https://api.spotify.com/v1/search?type=artist&q=${text}`;
                    //   $.getJSON(url, artists => {
                    //     console.log(artists);
                    //   });
                    // }, 400);
                    //
                    // $("#search").keyup(e => {
                    //   var text = e.target.value;
                    //   if (text.length < 3) return;
                    //   debounced(text);
                    // });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/main.template.html',
                        providers: [spotify_service_1.SpotifyService, post_service_1.PostService, github_service_1.GithubService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [spotify_service_1.SpotifyService, post_service_1.PostService, github_service_1.GithubService])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map