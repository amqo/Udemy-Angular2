import { Router, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { MessagesComponent } from './messages/messages.component';
import { NotFoundComponent } from './not-found.component';

import { AuthGuard } from './auth-guard.service';

export const routing = RouterModule.forRoot([
  { path: '', component: HomeComponent },
  {
    path: 'messages',
    component: MessagesComponent,
    canActivate: [ AuthGuard ]
  },
  { path: '**', component: NotFoundComponent },
]);
