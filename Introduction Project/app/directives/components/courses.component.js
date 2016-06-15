System.register(['angular2/core', '../../services/course.service', '../auto-grow.directive'], function(exports_1, context_1) {
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
    var core_1, course_service_1, auto_grow_directive_1;
    var CoursesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (course_service_1_1) {
                course_service_1 = course_service_1_1;
            },
            function (auto_grow_directive_1_1) {
                auto_grow_directive_1 = auto_grow_directive_1_1;
            }],
        execute: function() {
            CoursesComponent = (function () {
                function CoursesComponent(courseService) {
                    this.isActive = true;
                    this.title = "The title of courses page";
                    this.courses = courseService.getCourses();
                }
                CoursesComponent.prototype.onInput = function ($event) {
                    this.title = $event.target.value;
                };
                CoursesComponent.prototype.onClick = function ($event) {
                    console.log("Clicked", $event);
                    this.isActive = !this.isActive;
                    this.title = "";
                };
                CoursesComponent = __decorate([
                    core_1.Component({
                        selector: 'courses',
                        template: "\n    <h2>Courses</h2>\n    {{ title }}\n    <br/>\n    <input type=\"text\" autoGrow\n      (input)=\"onInput($event)\" [value]=\"title\" />\n    <input type=\"text\" [(ngModel)]=\"title\" />\n    <button class=\"btn btn-primary\" [class.active]=\"isActive\"\n      [style.backgroundColor]=\"isActive ? 'blue': 'gray'\"\n      (click)=\"onClick($event)\" >\n      Clear\n    </button>\n    <ul>\n      <li *ngFor=\"#course of courses\">{{ course }}</li>\n    </ul>\n  ",
                        providers: [course_service_1.CourseService],
                        directives: [auto_grow_directive_1.AutoGrowDirective]
                    }), 
                    __metadata('design:paramtypes', [course_service_1.CourseService])
                ], CoursesComponent);
                return CoursesComponent;
            }());
            exports_1("CoursesComponent", CoursesComponent);
        }
    }
});
//# sourceMappingURL=courses.component.js.map