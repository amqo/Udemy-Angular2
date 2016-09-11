import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MessagesModule } from './messages/messages.module';

import { AppComponent }  from './app.component';


@NgModule({
  imports:      [ BrowserModule, MessagesModule ],
  declarations: [ AppComponent ]
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
