import { Component } from 'angular2/core';
import { ControlGroup, FormBuilder, Validators } from 'angular2/common';
import { PasswordValidators } from './passwordValidators';
import { PasswordService } from './password.service';

@Component({
  selector: 'change-password-form',
  templateUrl: 'app/change-password-form.template.html',
  providers: [PasswordService]
})

export class ChangePasswordFormComponent {

  form: ControlGroup;
  passwordService: PasswordService;

  constructor(formBuilder: FormBuilder,
    passwordService: PasswordService) {
    this.passwordService = passwordService;
    this.form = formBuilder.group({
      current: [''],
      newPassword: ['', PasswordValidators.cannotContainSpace],
      confirmPassword: ['']
    }, { validator: PasswordValidators.confirmPasswordMatches });
  }

  changePassword() {
    var currentControl = this.form.find('current');
    if (currentControl) {
      var currentValue = currentControl.value;
      if (!this.passwordService.checkCurrentPassword(currentValue)) {
        currentControl.setErrors({
          wrongCurrentPassword: true
        });
      } else {
        alert('Password succesfully changed!')
      }
    }
  }
}
