/// <reference path="../typings/tsd.d.ts" />
System.register(['angular2/core', 'rxjs/Rx', './services/spotify.service', './github.component', './post.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Rx_1, spotify_service_1, github_component_1, post_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (spotify_service_1_1) {
                spotify_service_1 = spotify_service_1_1;
            },
            function (github_component_1_1) {
                github_component_1 = github_component_1_1;
            },
            function (post_component_1_1) {
                post_component_1 = post_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_spotifyService) {
                    this._spotifyService = _spotifyService;
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.initSearchInput();
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
                        templateUrl: 'app/templates/main.template.html',
                        directives: [github_component_1.GithubProfileComponent, post_component_1.PostComponent],
                        providers: [spotify_service_1.SpotifyService]
                    }), 
                    __metadata('design:paramtypes', [spotify_service_1.SpotifyService])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map