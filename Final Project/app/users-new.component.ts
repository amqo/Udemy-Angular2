import { Component } from 'angular2/core';
import { ControlGroup, Control, Validators, FormBuilder } from 'angular2/common';
import { Router } from 'angular2/router';

@Component({
  selector: 'users-new',
  templateUrl: 'app/users-new.component.html'
})

export class UsersNewComponent {

  form: ControlGroup;

  constructor(private _router: Router, formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      street: ['', Validators.required],
      suite: ['', Validators.required],
      city: ['', Validators.required],
      zipCode: ['', Validators.required]
    })
  }

  save() {
    console.log('Form saved');
    this._router.navigate(['Users']);
  }

}
