import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { NavBarComponent } from './navbar.component';
import { HomeComponent } from './home.component';
import { PostsComponent } from './posts.component';
import { UsersComponent } from './users.component';
import { UsersNewComponent } from './users-new.component';
import { NotFoundComponent } from './not-found.component';

@RouteConfig([
  { path: '/', name: 'Home', component: HomeComponent, useAsDefault: true },
  { path: '/users', name: 'Users', component: UsersComponent },
  { path: '/users/new', name: 'UsersNew', component: UsersNewComponent },
  { path: '/posts', name: 'Posts', component: PostsComponent },
  { path: '/not-found', name: 'NotFound', component: NotFoundComponent },
  { path: '/*other', name: 'Other', redirectTo: ['Home'] }
])
@Component({
    selector: 'my-app',
    template: `
      <navbar></navbar>
      <div class="container">
        <router-outlet></router-outlet>
      </div>
    `,
    directives: [NavBarComponent, ROUTER_DIRECTIVES]
})
export class AppComponent { }
