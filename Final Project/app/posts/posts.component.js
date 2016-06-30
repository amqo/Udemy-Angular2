System.register(['angular2/core', './posts.service', '../users/users.service', '../shared/spinner.component', '../shared/pagination.component'], function(exports_1, context_1) {
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
            let PostsComponent = class PostsComponent {
                constructor(_postsService, _usersService) {
                    this._postsService = _postsService;
                    this._usersService = _usersService;
                    this.posts = [];
                    this.pagedPosts = [];
                    this.postsPerPage = 12;
                    this.users = [];
                }
                ngOnInit() {
                    this.loadPosts();
                    this.loadUsers();
                }
                selectPost(post) {
                    this.isLoadingComments = true;
                    this.currentPost = post;
                    this._postsService.getPostComments(post.id)
                        .subscribe(res => this.currentPost.comments = res, null, () => this.isLoadingComments = false);
                }
                filterPosts(filter) {
                    this.currentPost = null;
                    this.posts = [];
                    this.pagedPosts = [];
                    this.loadPosts(filter);
                }
                loadPosts(filter) {
                    this.isLoading = true;
                    this._postsService.getPosts(filter)
                        .subscribe(res => {
                        this.posts = res;
                        // this.pagedPosts = this.getPostsInPage(1);
                        this.pagedPosts = _.take(this.posts, this.postsPerPage);
                    }, null, () => this.isLoading = false);
                }
                showPage(page) {
                    // this.pagedPosts = this.getPostsInPage($event);
                    const firstPage = (page - 1) * this.postsPerPage;
                    this.pagedPosts = _.take(_.rest(this.posts, firstPage), this.postsPerPage);
                }
                // private getPostsInPage(page) {
                //   let result = [];
                //   const firstPage = (page - 1) * this.postsPerPage;
                //   const lastPage = Math.min(firstPage + this.postsPerPage, this.posts.length);
                //   for (var i = firstPage; i < lastPage; ++i)
                //     result.push(this.posts[i]);
                //
                //   return result;
                // }
                loadUsers() {
                    this._usersService.getUsers()
                        .subscribe(res => this.users = res);
                }
            };
            PostsComponent = __decorate([
                core_1.Component({
                    templateUrl: 'app/posts/posts.component.html',
                    providers: [posts_service_1.PostsService, users_service_1.UsersService],
                    directives: [spinner_component_1.SpinnerComponent, pagination_component_1.PaginationComponent],
                    styles: [`
        .posts li { cursor: default; }
        .posts li:hover { background: #ecf0f1 }
        .list-group-item.active,
        .list-group-item.active:hover,
        .list-group-item.active:focus {
            background-color: #ecf0f1;
            border-color: #ecf0f1;
            color: #2c3e50;
        }
    `],
                }), 
                __metadata('design:paramtypes', [posts_service_1.PostsService, users_service_1.UsersService])
            ], PostsComponent);
            exports_1("PostsComponent", PostsComponent);
        }
    }
});
//# sourceMappingURL=posts.component.js.map