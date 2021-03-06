System.register(['angular2/core', './directives/components/courses.component', './directives/components/authors.component', './directives/components/bootstrap.panel.component', './directives/components/contact-form.component', './directives/components/signup-form.component'], function(exports_1, context_1) {
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
    var core_1, courses_component_1, authors_component_1, bootstrap_panel_component_1, contact_form_component_1, signup_form_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (authors_component_1_1) {
                authors_component_1 = authors_component_1_1;
            },
            function (bootstrap_panel_component_1_1) {
                bootstrap_panel_component_1 = bootstrap_panel_component_1_1;
            },
            function (contact_form_component_1_1) {
                contact_form_component_1 = contact_form_component_1_1;
            },
            function (signup_form_component_1_1) {
                signup_form_component_1 = signup_form_component_1_1;
            }],
        execute: function() {
            let AppComponent = class AppComponent {
            };
            AppComponent = __decorate([
                core_1.Component({
                    selector: 'my-app',
                    template: `
      <h1>My First Angular 2 App</h1>
      <signup-form></signup-form>
      <contact-form></contact-form>
      <courses></courses>
      <authors></authors>
      <br/>
      <bs-panel>
        <div class="heading">
          This is the heading!
        </div>
        <div class="body">
          This is the body added with ng-content!
        </div>
        <div class="body">
          This is another body content added with the same selector!
        </div>
      </bs-panel>
    `,
                    directives: [courses_component_1.CoursesComponent, authors_component_1.AuthorsComponent,
                        bootstrap_panel_component_1.BootstrapPanel, contact_form_component_1.ContactFormComponent, signup_form_component_1.SignupFormComponent]
                }), 
                __metadata('design:paramtypes', [])
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map