
import { Component, OnInit, onDestroy } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
    template: `
      <h1>Photo Details for Photo {{ id }}</h1>
    `
})
export class PhotoDetailsComponent implements OnInit, OnDestroy {

  id;
  subscription;

  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this._route.params.subscribe(params => {
      this.id = +params["id"];
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
