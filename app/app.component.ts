import {Component} from 'angular2/core';
import { CoursesComponent } from "./courses.component";
import { AuthorsComponent } from "./authors.component";


@Component({
    selector: 'my-app',
    template: '<h1>Hello Angular2 Component 1</h1><courses></courses><hr><authors></authors>',
    directives:[CoursesComponent,AuthorsComponent]
})
export class AppComponent { }