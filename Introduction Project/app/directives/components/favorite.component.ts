import { Component, Input } from 'angular2/core';

@Component({
  selector: 'favorite',
  template: `
    <i class="glyphicon"
      [class.glyphicon-star-empty]="!isFavorite"
      [class.glyphicon-star]="isFavorite"
      (click)="onClick()">
    </i>
  `,
  // Other way to create input properties
  // inputs: ['isFavorite:is-favorite']
})

export class FavoriteComponent {

  @Input('is-favorite') isFavorite = false;

  onClick() {
    this.isFavorite = !this.isFavorite;
  }
}
