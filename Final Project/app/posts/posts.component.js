System.register(['@angular/core', './posts.service', '../users/users.service', '../shared/spinner.component', '../shared/pagination.component'], function(exports_1, context_1) {
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
    var core_1, posts_service_1, users_service_1, spinner_component_1, pagination_component_1;
    var PostsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (posts_service_1_1) {
                posts_service_1 = posts_service_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            },
            function (spinner_component_1_1) {
                spinner_component_1 = spinner_component_1_1;
            },
            function (pagination_component_1_1) {
                pagination_component_1 = pagination_component_1_1;
            }],
        execute: function() {
            PostsComponent = (function () {
                function PostsComponent(_postsService, _usersService) {
                    this._postsService = _postsService;
                    this._usersService = _usersService;
                    this.posts = [];
                    this.pagedPosts = [];
                    this.postsPerPage = 12;
                    this.users = [];
                }
                PostsComponent.prototype.ngOnInit = function () {
                    this.loadPosts();
                    this.loadUsers();
                };
                PostsComponent.prototype.selectPost = function (post) {
                    var _this = this;
                    this.isLoadingComments = true;
                    this.currentPost = post;
                    this._postsService.getPostComments(post.id)
                        .subscribe(function (res) { return _this.currentPost.comments = res; }, null, function () { return _this.isLoadingComments = false; });
                };
                PostsComponent.prototype.filterPosts = function (filter) {
                    this.currentPost = null;
                    this.posts = [];
                    this.pagedPosts = [];
                    this.loadPosts(filter);
                };
                PostsComponent.prototype.loadPosts = function (filter) {
                    var _this = this;
                    this.isLoading = true;
                    this._postsService.getPosts(filter)
                        .subscribe(function (res) {
                        _this.posts = res;
                        // this.pagedPosts = this.getPostsInPage(1);
                        _this.pagedPosts = _.take(_this.posts, _this.postsPerPage);
                    }, null, function () { return _this.isLoading = false; });
                };
                PostsComponent.prototype.showPage = function (page) {
                    // this.pagedPosts = this.getPostsInPage($event);
                    var firstPage = (page - 1) * this.postsPerPage;
                    this.pagedPosts = _.take(_.rest(this.posts, firstPage), this.postsPerPage);
                };
                // private getPostsInPage(page) {
                //   let result = [];
                //   const firstPage = (page - 1) * this.postsPerPage;
                //   const lastPage = Math.min(firstPage + this.postsPerPage, this.posts.length);
                //   for (var i = firstPage; i < lastPage; ++i)
                //     result.push(this.posts[i]);
                //
                //   return result;
                // }
                PostsComponent.prototype.loadUsers = function () {
                    var _this = this;
                    this._usersService.getUsers()
                        .subscribe(function (res) { return _this.users = res; });
                };
                PostsComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/posts/posts.component.html',
                        providers: [posts_service_1.PostsService, users_service_1.UsersService],
                        directives: [spinner_component_1.SpinnerComponent, pagination_component_1.PaginationComponent],
                        styles: ["\n        .posts li { cursor: default; }\n        .posts li:hover { background: #ecf0f1 }\n        .list-group-item.active,\n        .list-group-item.active:hover,\n        .list-group-item.active:focus {\n            background-color: #ecf0f1;\n            border-color: #ecf0f1;\n            color: #2c3e50;\n        }\n    "],
                    }), 
                    __metadata('design:paramtypes', [posts_service_1.PostsService, users_service_1.UsersService])
                ], PostsComponent);
                return PostsComponent;
            }());
            exports_1("PostsComponent", PostsComponent);
        }
    }
});
//# sourceMappingURL=posts.component.js.map