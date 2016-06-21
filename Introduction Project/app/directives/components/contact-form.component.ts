import { Component } from 'angular2/core';

@Component({
  selector: 'contact-form',
  templateUrl: 'app/templates/contact-form.template.html'
})

export class ContactFormComponent {
  log(message) {
    console.log(message);
  }
}
