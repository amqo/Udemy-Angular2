import { Component } from 'angular2/core';
import { CourseService } from '../../services/course.service';
import { AutoGrowDirective } from '../auto-grow.directive';

@Component({
  selector: 'courses',
  template: `
    <h2>Courses</h2>
    {{ title }}
    <br/>
    <!-- Testing that the style (color: orange) applied to .glyphicon-star from
         Favorite component is not affecting the class here -->
    <i class="glyphicon glyphicon-star"></i>
    <input type="text" autoGrow
      (input)="onInput($event)" [value]="title" />
    <input type="text" [(ngModel)]="title" />
    <button class="btn btn-primary"
      [class.active]="isActive"
      [ngStyle]="{
        backgroundColor: isActive ? 'blue': 'gray',
        fontWeight: isActive ? 'bold': 'normal'
      }"
      (click)="onClick($event)" >
      Clear
    </button>
    <ul>
      <li *ngFor="#course of courses">{{ course }}</li>
    </ul>
  `,
  providers: [CourseService],
  directives: [AutoGrowDirective]
})

export class CoursesComponent {

  isActive = true;

  title = "The title of courses page";
  courses: string[];

  constructor(courseService: CourseService) {
    this.courses = courseService.getCourses();
  }

  onInput($event) {
    this.title = $event.target.value;
  }

  onClick($event) {
    console.log("Clicked", $event);
    this.isActive = !this.isActive;
    this.title = "";
  }
}
