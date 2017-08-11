import { Component } from 'angular2/core';
import { AuthorsService } from "./authors.service";
//Decorators
    @Component({
        selector: 'authors',
        template: `<h2> Author Detials</h2>
          {{ title }}
          <ul>
                <li *ngFor="#name of names">
                    {{ name }}
                </li>
          </ul>
          `,
          providers:[AuthorsService]
    })
export class AuthorsComponent {
    title="AUTHORS PROFILE ";
    names;
    constructor(authorsService: AuthorsService) {
        this.names=authorsService.getAuthors();
    }
} 