import { Component } from 'angular2/core';
import { AuthorService } from '../../services/author.service';
import { FavoriteComponent } from './favorite.component';
import { BootstrapPanel } from './bootstrap.panel.component';
import { SummaryPipe } from '../../pipes/summary.pipe';

@Component({
  selector: 'authors',
  template: `
    <h2>Authors</h2>
    <favorite
      [is-favorite]="post.isFavorite"
      (favoriteChange)="onFavoriteChange($event)">
    </favorite>
    {{ post?.title | uppercase }}
    <br/>
    {{ post?.body | summary:200 }}
    <br/>
    <ul>
      <li *ngFor="#author of authors, #i = index">
        {{ i + 1 }} - {{ author }}
      </li>

      <!-- This template tab is equivalent to the previous *ngFor
      <template ngFor [ngForOf]="courses" #course #i=index>
        <li>{{ i + 1 }} - {{ author }}</li>
      </template> -->
    </ul>
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
  providers: [AuthorService],
  directives: [FavoriteComponent, BootstrapPanel],
  pipes: [SummaryPipe]
})

export class AuthorsComponent {
  authors: string[];

  constructor(authorService: AuthorService) {
    this.authors = authorService.getAuthors();
  }

  onFavoriteChange({ newValue }) {
    console.log('Favorite changed to', newValue);
  }

  // Post GET from a Server / External API
  post = {
    title: "Title for the authors page",
    isFavorite: true,
    body: `
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus
      recusandae nulla impedit tenetur. Fugit fugiat, velit culpa, sapiente
      debitis ullam animi at itaque quisquam nostrum vitae, consequatur eius
      voluptatibus cupiditate!
    `
  }
}
