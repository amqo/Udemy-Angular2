import { Control, ControlGroup } from 'angular2/common';

export class PasswordValidators {

  static cannotContainSpace(control: Control) {
    if (control.value.indexOf(' ') >= 0)
      return {
        cannotContainSpace: true
      };
      return null;
  }

  static confirmPasswordMatches(group: ControlGroup): any {
    var currentPassword = group.find('current');
    var newPassword = group.find('newPassword');
    var confirmPassword = group.find('confirmPassword');
    if (currentPassword.value === newPassword.value) {
      return {
        newPasswordDifferent: true
      }
    }
    if (newPassword.value === confirmPassword.value) return null;
    return {
      confirmPasswordMatches: true
    };
  }

}
