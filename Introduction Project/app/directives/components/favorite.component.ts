import { Component, Input, Output, EventEmitter } from 'angular2/core';

@Component({
  selector: 'favorite',
  templateUrl: 'app/templates/favorite.template.html',
  styles: [`
    .glyphicon-star {
      color: orange;
    }
    .glyphicon-star-empty {
      cursor: pointer;
    }
  `],
  // Other way to create input / output properties
  // inputs: ['isFavorite:is-favorite'],
  // outputs: ['change:favoriteChange']
})

export class FavoriteComponent {

  @Input('is-favorite') isFavorite = false;
  @Output('favoriteChange') change = new EventEmitter();

  onClick() {
    this.isFavorite = !this.isFavorite;
    this.change.emit({ newValue: this.isFavorite });
  }
}
