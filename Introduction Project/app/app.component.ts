import { Component } from 'angular2/core';
import { CoursesComponent } from './directives/components/courses.component';
import { AuthorsComponent } from './directives/components/authors.component';

@Component({
    selector: 'my-app',
    template: `
      <h1>My First Angular 2 App</h1>
      <courses></courses>
      <authors></authors>
    `,
    directives: [CoursesComponent, AuthorsComponent]
})

export class AppComponent { }
