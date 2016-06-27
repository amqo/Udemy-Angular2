System.register(['angular2/core', './services/post.service', 'angular2/http'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, post_service_1, http_1;
    var PostComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (post_service_1_1) {
                post_service_1 = post_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            PostComponent = (function () {
                function PostComponent(_postService) {
                    this._postService = _postService;
                    this.isLoading = true;
                    this.content = '';
                    // this._postService.createPost(
                    //   {userId: 1, title: "a", body: "b"}
                    // );
                }
                PostComponent.prototype.ngOnInit = function () {
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
                PostComponent = __decorate([
                    core_1.Component({
                        selector: 'post-placeholder',
                        templateUrl: 'app/templates/post.template.html',
                        providers: [post_service_1.PostService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [post_service_1.PostService])
                ], PostComponent);
                return PostComponent;
            })();
            exports_1("PostComponent", PostComponent);
        }
    }
});
//# sourceMappingURL=post.component.js.map