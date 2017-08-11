import { Component } from 'angular2/core';
import { CourseService } from './course.service';
// Decorater
@Component({
    selector: 'courses',
    template: `<h2>Courses Component 2</h2>
    {{ title  }}
    <ul>
        <li *ngFor="#course of courses">{{ course }}</li>
    </ul>
    `,
    providers:[CourseService]
})
export class CoursesComponent {  
    // Interpolation and One way Binding
    title:string ="The Title of the Courses Page ";
    courses;
    constructor(courseService: CourseService){
      this.courses=courseService.getCourses();
    } 

}