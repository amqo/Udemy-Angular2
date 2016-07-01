import { Control } from '@angular/common';

export class UsersNewValidators {
  static mustBeAValidEmail(control: Control) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let valid = re.test(control.value);
    if (valid) return null;
    return { mustBeAValidEmail: true };
  }
}
