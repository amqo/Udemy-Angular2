System.register(['angular2/core', './posts.service', './spinner.component'], function(exports_1, context_1) {
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
    var core_1, posts_service_1, spinner_component_1;
    var PostsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (posts_service_1_1) {
                posts_service_1 = posts_service_1_1;
            },
            function (spinner_component_1_1) {
                spinner_component_1 = spinner_component_1_1;
            }],
        execute: function() {
            let PostsComponent = class PostsComponent {
                constructor(_postsService) {
                    this._postsService = _postsService;
                    this.posts = [];
                    this.isLoading = true;
                }
                ngOnInit() {
                    this._postsService.getPosts()
                        .subscribe(res => this.posts = res, null, () => {
                        this.isLoading = false;
                    });
                }
                selectPost(post) {
                    this.currentPost = post;
                }
            };
            PostsComponent = __decorate([
                core_1.Component({
                    templateUrl: 'app/posts.component.html',
                    providers: [posts_service_1.PostsService],
                    directives: [spinner_component_1.SpinnerComponent],
                    styles: [`
        .posts li { cursor: default; }
        .posts li:hover { background: #ecf0f1; }
        .list-group-item.active,
        .list-group-item.active:hover,
        .list-group-item.active:focus {
            background-color: #ecf0f1;
            border-color: #ecf0f1;
            color: #2c3e50;
        }
    `],
                }), 
                __metadata('design:paramtypes', [posts_service_1.PostsService])
            ], PostsComponent);
            exports_1("PostsComponent", PostsComponent);
        }
    }
});
//# sourceMappingURL=posts.component.js.map