import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { MessagesComponent } from './messages.component';
import { MessagesService } from './messages.service';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, MessagesComponent ],
  providers:    [ MessagesService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
