System.register(['angular2/core', '../../services/author.service', './favorite.component', './bootstrap.panel.component', '../../pipes/summary.pipe'], function(exports_1, context_1) {
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
    var core_1, author_service_1, favorite_component_1, bootstrap_panel_component_1, summary_pipe_1;
    var AuthorsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (author_service_1_1) {
                author_service_1 = author_service_1_1;
            },
            function (favorite_component_1_1) {
                favorite_component_1 = favorite_component_1_1;
            },
            function (bootstrap_panel_component_1_1) {
                bootstrap_panel_component_1 = bootstrap_panel_component_1_1;
            },
            function (summary_pipe_1_1) {
                summary_pipe_1 = summary_pipe_1_1;
            }],
        execute: function() {
            AuthorsComponent = (function () {
                function AuthorsComponent(authorService) {
                    // Post GET from a Server / External API
                    this.post = {
                        title: "Title for the authors page",
                        isFavorite: true,
                        body: "\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus\n      recusandae nulla impedit tenetur. Fugit fugiat, velit culpa, sapiente\n      debitis ullam animi at itaque quisquam nostrum vitae, consequatur eius\n      voluptatibus cupiditate!\n    "
                    };
                    this.authors = authorService.getAuthors();
                }
                AuthorsComponent.prototype.onFavoriteChange = function (_a) {
                    var newValue = _a.newValue;
                    console.log('Favorite changed to', newValue);
                };
                AuthorsComponent = __decorate([
                    core_1.Component({
                        selector: 'authors',
                        template: "\n    <h2>Authors</h2>\n    <favorite\n      [is-favorite]=\"post.isFavorite\"\n      (favoriteChange)=\"onFavoriteChange($event)\">\n    </favorite>\n    {{ post?.title | uppercase }}\n    <br/>\n    {{ post?.body | summary:200 }}\n    <br/>\n    <ul>\n      <li *ngFor=\"#author of authors, #i = index\">\n        {{ i + 1 }} - {{ author }}\n      </li>\n\n      <!-- This template tab is equivalent to the previous *ngFor\n      <template ngFor [ngForOf]=\"courses\" #course #i=index>\n        <li>{{ i + 1 }} - {{ author }}</li>\n      </template> -->\n    </ul>\n    <br/>\n    <bs-panel>\n      <div class=\"heading\">\n        This is the heading!\n      </div>\n      <div class=\"body\">\n        This is the body added with ng-content!\n      </div>\n      <div class=\"body\">\n        This is another body content added with the same selector!\n      </div>\n    </bs-panel>\n  ",
                        providers: [author_service_1.AuthorService],
                        directives: [favorite_component_1.FavoriteComponent, bootstrap_panel_component_1.BootstrapPanel],
                        pipes: [summary_pipe_1.SummaryPipe]
                    }), 
                    __metadata('design:paramtypes', [author_service_1.AuthorService])
                ], AuthorsComponent);
                return AuthorsComponent;
            }());
            exports_1("AuthorsComponent", AuthorsComponent);
        }
    }
});
//# sourceMappingURL=authors.component.js.map