import { CanDeactivate } from '@angular/router';
import { FormGroup } from '@angular/forms';

import { MessagesComponent } from './messages/messages.component';

export interface FormComponent {
  // form: FormGroup;
  hasUnsavedChanges() : Boolean;
}

export class PreventUnsavedChangesGuard implements CanDeactivate<FormComponent> {

  canDeactivate(component: FormComponent) {
      // if (component.form.dirty)
      if (component.hasUnsavedChanges())
        return confirm("Are you sure?");

      return true;
  }
}
