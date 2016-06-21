import { Component } from 'angular2/core';
import { ControlGroup, Control, Validators, FormBuilder } from 'angular2/common';

@Component({
  selector: 'signup-form',
  templateUrl: 'app/templates/signup-form.template.html'
})

export class SignupFormComponent {

  //Model driven form
  // form = new ControlGroup({
  //   username: new Control('', Validators.required),
  //   password: new Control('', Validators.required)
  // });

  form: ControlGroup;

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  signup() {
    console.log(this.form.value);
  }
}
