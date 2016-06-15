import { Component } from 'angular2/core';
import { AuthorService } from '../../services/author.service';
import { FavoriteComponent } from './favorite.component';

@Component({
  selector: 'authors',
  template: `
    <h2>Authors</h2> <favorite></favorite>
    {{ title }}
    <ul>
      <li *ngFor="#author of authors">{{ author }}</li>
    </ul>
  `,
  providers: [AuthorService],
  directives: [FavoriteComponent]
})

export class AuthorsComponent {
  title = "Title for the authors page";
  authors: string[];

  constructor(authorService: AuthorService) {
    this.authors = authorService.getAuthors();
  }
}
