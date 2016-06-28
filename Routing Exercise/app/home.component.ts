import { Component } from 'angular2/core';
import { RouterLink } from 'angular2/router';

@Component({
    selector: 'home-page',
    template: `
      <h1>Home Page</h1>
      <ul class="list-group">
        <li *ngFor="#archive of archives" className="list-group-item">
          <a [routerLink]="[
            'Archives', { year: archive.year, month: archive.month }
          ]">
            {{ archive.year }}/{{ archive.month }}
          </a>
        </li>
      </ul>
    `,
    directives: [RouterLink]
})
export class HomeComponent {
  archives = [
    { year: 2016, month: 1 },
    { year: 2016, month: 2 },
    { year: 2016, month: 3 }
  ];
}
