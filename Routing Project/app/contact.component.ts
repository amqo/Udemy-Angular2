import { Component } from 'angular2/core';
import { Router, CanDeactivate } from 'angular2/router';

@Component({
    templateUrl: '/app/contact.component.html'
})
export class ContactComponent implements CanDeactivate {

  constructor(private _router: Router) { }

  routerCanDeactivate(next, previous) {
    // This form should have been done as a model driven form
    // if (this.form.dirty)
    return confirm("Are you sure you want to exit?");
  }

  onSubmit(form) {
      console.log(form);
      this._router.navigate(['Albums']);
  }
}