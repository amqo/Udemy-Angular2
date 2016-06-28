import { Component, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router'

@Component({
  selector: 'archives',
  template: `
    <h1>Archives</h1>
    <br/>
    {{ year }} / {{ month }}
  `
})

export class ArchivesComponent implements OnInit {

  year: number;
  month: number;

  constructor(private _routeParams: RouteParams) { }

  ngOnInit() {
    this.year = parseInt(this._routeParams.get("year"));
    this.month = parseInt(this._routeParams.get("month"));
  }

}
