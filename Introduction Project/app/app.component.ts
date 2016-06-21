import { Component } from 'angular2/core';
import { CoursesComponent } from './directives/components/courses.component';
import { AuthorsComponent } from './directives/components/authors.component';
import { BootstrapPanel } from './directives/components/bootstrap.panel.component';
import { ContactFormComponent } from './directives/components/contact-form.component';

@Component({
    selector: 'my-app',
    template: `
      <h1>My First Angular 2 App</h1>
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
    directives: [CoursesComponent, AuthorsComponent,
      BootstrapPanel, ContactFormComponent]
})

export class AppComponent { }
