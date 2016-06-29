import { Component, OnInit } from 'angular2/core';
import { RouterLink, ROUTER_DIRECTIVES } from 'angular2/router';

import { UsersService } from './users.service';

@Component({
  templateUrl: 'app/users.component.html',
  providers: [UsersService],
  directives: [ROUTER_DIRECTIVES]
})

export class UsersComponent implements OnInit {

  users: any[];

  constructor(private _usersService: UsersService) { }

  ngOnInit() {
    this._usersService.getUsers()
      .subscribe(users => this.users = users);
  }
}
