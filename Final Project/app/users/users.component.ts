import { Component, OnInit } from '@angular/core';
import { RouterLink, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import { UsersService } from './users.service';

@Component({
  templateUrl: 'app/users/users.component.html',
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

  removeUser(user) {
    if (confirm(`Are you sure you want to delete ${user.name}?`)) {
      var index = this.users.indexOf(user);
      this.users.splice(index, 1);
      this._usersService.removeUser(user.id)
        .subscribe(res => {
          console.log('User removed', user);
        }, err => {
          alert('Could not delete the user.');
          this.users.splice(index, 0, user);
        });
    }
  }
}
