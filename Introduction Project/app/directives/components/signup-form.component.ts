import { Component } from 'angular2/core';
import { ControlGroup, Control, Validators, FormBuilder } from 'angular2/common';
import { UsernameValidators } from '../validators/usernameValidators';

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
      username: [
        '', Validators.compose(
          [Validators.required, UsernameValidators.cannotContainSpace]
        ), Validators.composeAsync(
          [UsernameValidators.shouldBeUnique]
        )
      ],
      password: ['', Validators.required]
    })
  }

  signup() {
    // Use service:
    // var result = authService.login(this.form.value)
    // Check result, and if it's false then:
    this.form.find('username').setErrors({
      invalidLogin: true
    });

    console.log(this.form.value);
  }
}
