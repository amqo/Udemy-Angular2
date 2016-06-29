import { Component } from 'angular2/core';
import { ControlGroup, Control, Validators, FormBuilder } from 'angular2/common';
import { Router, CanDeactivate } from 'angular2/router';

import { UsersNewValidators } from './usersNewValidators';
import { UsersService } from './users.service';

@Component({
  selector: 'users-new',
  templateUrl: 'app/users-new.component.html',
  providers: [UsersService]
})

export class UsersNewComponent implements CanDeactivate {

  form: ControlGroup;
  saving = false;

  constructor(
    private _usersService: UsersService,
    private _router: Router,
    formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.compose(
        [Validators.required, UsersNewValidators.mustBeAValidEmail]
      )],
      phone: [],
      address: formBuilder.group({
        street: [],
        suite: [],
        city: [],
        zipCode: []
      })
    })
  }

  routerCanDeactivate(next, previous) {
    if (this.form.dirty && !this.saving) {
      return confirm('You have unsaved changes. Are you sure you want to navigate away?');
    }
  }

  save() {
    // Instead of using a flag, make the form clean
    this.saving = true;
    this._usersService.postUser(this.form.value)
      .subscribe(res => {
        console.log('Result from post', res)
      }, null, () => {
        console.log('Post form completed, redirecting...');
        this._router.navigate(['Users']);
      });
  }

}
