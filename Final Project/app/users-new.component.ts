import { Component } from 'angular2/core';
import { ControlGroup, Control, Validators, FormBuilder } from 'angular2/common';
import { Router, CanDeactivate } from 'angular2/router';

import { UsersNewValidators } from './usersNewValidators';

@Component({
  selector: 'users-new',
  templateUrl: 'app/users-new.component.html'
})

export class UsersNewComponent implements CanDeactivate {

  form: ControlGroup;
  saving = false;

  constructor(private _router: Router, formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.compose(
        [Validators.required, UsersNewValidators.mustBeAValidEmail]
      )]
    })
  }

  routerCanDeactivate(next, previous) {
    if (this.form.dirty && !this.saving) {
      return confirm('You have unsaved changes. Are you sure you want to navigate away?');
    }
  }

  save() {
    this.saving = true;
    console.log('Form saved');
    this._router.navigate(['Users']);
  }

}
