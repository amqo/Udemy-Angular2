import { Component, OnInit } from 'angular2/core';
import { ControlGroup, Control, Validators, FormBuilder } from 'angular2/common';
import { Router, CanDeactivate, RouteParams } from 'angular2/router';

import { UsersNewValidators } from './usersNewValidators';
import { UsersService } from './users.service';
import { User } from './user';

@Component({
  templateUrl: 'app/users-new.component.html',
  providers: [UsersService]
})

export class UsersNewComponent implements CanDeactivate, OnInit {

  form: ControlGroup;
  saving = false;
  title = '';
  user = new User();

  constructor(
    private _usersService: UsersService,
    private _routeParams: RouteParams,
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

  ngOnInit() {
    let userId = this._routeParams.get('id');
    this.title = userId ? 'Edit User' : 'New User';
    if (!userId) return;
    this._usersService.getUser(userId)
      .subscribe(
        user => this.user = user ,
        response => {
          if (response.status == 404) {
            this._router.navigate(['NotFound']);
          }
        }
      );
  }

  routerCanDeactivate(next, previous) {
    if (this.form.dirty && !this.saving) {
      return confirm('You have unsaved changes. Are you sure you want to navigate away?');
    }
  }

  save() {
    this._usersService.postUser(this.form.value)
      .subscribe(res => {
        // Instead of using a flag, make the form clean
        // this.form.markAsPristine();
        this.saving = true;
        console.log('Result from post', res)
      }, null, () => {
        console.log('Post form completed, redirecting...');
        this._router.navigate(['Users']);
      });
  }

}
