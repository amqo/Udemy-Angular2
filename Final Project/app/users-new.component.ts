import { Component } from 'angular2/core';
import { ControlGroup, Control, Validators, FormBuilder } from 'angular2/common';
import { Router } from 'angular2/router';

import { UsersNewValidators } from './usersNewValidators';

@Component({
  selector: 'users-new',
  templateUrl: 'app/users-new.component.html'
})

export class UsersNewComponent {

  form: ControlGroup;

  constructor(private _router: Router, formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.compose(
        [Validators.required, UsersNewValidators.mustBeAValidEmail]
      )]
    })
  }

  save() {
    console.log('Form saved');
    this._router.navigate(['Users']);
  }

}
