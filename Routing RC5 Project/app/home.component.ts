import { Component } from '@angular/core';

import { AuthService } from './auth.service';

@Component({
  template: `
    <h1>Home Page</h1>
  `
})
export class HomeComponent {

  constructor(authService: AuthService) {
    authService.login("username", "password");
  }

}
