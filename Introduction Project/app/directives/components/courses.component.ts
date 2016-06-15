import { Component } from 'angular2/core';
import { CourseService } from '../../services/course.service';
import { AutoGrowDirective } from '../auto-grow.directive';

@Component({
  selector: 'courses',
  template: `
    <h2>Courses</h2>
    {{ title }}
    <input type="text" autoGrow />
    <button class="btn btn-primary" [class.active]="isActive" >Submit</button>
    <ul>
      <li *ngFor="#course of courses">{{ course }}</li>
    </ul>
  `,
  providers: [CourseService],
  directives: [AutoGrowDirective]
})

export class CoursesComponent {

  isActive = false;

  title = "The title of courses page";
  courses: string[];

  constructor(courseService: CourseService) {
    this.courses = courseService.getCourses();
  }
}
