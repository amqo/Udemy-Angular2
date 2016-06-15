import { Component, Input, Output, EventEmitter } from 'angular2/core';

@Component({
  selector: 'favorite',
  template: `
    <i class="glyphicon"
      [class.glyphicon-star-empty]="!isFavorite"
      [class.glyphicon-star]="isFavorite"
      (click)="onClick()">
    </i>
  `,
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
