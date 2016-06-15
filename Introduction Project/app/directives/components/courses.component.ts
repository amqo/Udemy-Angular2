import { Component } from 'angular2/core';
import { CourseService } from '../../services/course.service';
import { AutoGrowDirective } from '../auto-grow.directive';

@Component({
  selector: 'courses',
  template: `
    <h2>Courses</h2>
    {{ title }}
    <input type="text" autoGrow />
    <button class="btn btn-primary"
      [class.active]="isActive"
      [style.backgroundColor]="isActive ? 'blue': 'gray'"
      (click)="onClick($event)" >
      Submit
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

  onClick($event) {
    console.log("Clicked", $event);
    this.isActive = !this.isActive;
  }
}
