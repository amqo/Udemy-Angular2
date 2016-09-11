import { Router, RouterModule } '@angular/router';

import { HomeComponent } from './home.component';
import { MessagesComponent } from './messages/messages.component';
import { NotFoundComponent } from './not-found.component';

export const routing = RouterModule.forRoot([
  { path: '', component: HomeComponent },
  { path: 'messages', component: MessagesComponent },
  { path: '**', component: NotFoundComponent },
]);
