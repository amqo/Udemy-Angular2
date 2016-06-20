import { Component } from 'angular2/core';
import { AuthorService } from '../../services/author.service';
import { FavoriteComponent } from './favorite.component';

@Component({
  selector: 'authors',
  template: `
    <h2>Authors</h2>
    <favorite
      [is-favorite]="post.isFavorite"
      (favoriteChange)="onFavoriteChange($event)">
    </favorite>
    {{ title }}
    <ul>
      <li *ngFor="#author of authors, #i = index">{{ i + 1 }} - {{ author }}</li>

      <!-- This template tab is equivalent to the previous *ngFor
      <template ngFor [ngForOf]="courses" #course #i=index>
        <li>{{ i + 1 }} - {{ author }}</li>
      </template> -->
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

  onFavoriteChange({ newValue }) {
    console.log('Favorite changed to', newValue);
  }

  // Post GET from a Server / External API
  post = {
    title: "Title",
    isFavorite: true
  }
}
