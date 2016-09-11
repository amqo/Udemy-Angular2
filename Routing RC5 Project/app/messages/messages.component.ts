
import { Component } from '@angular/core';
import { MessagesService } from './messages.service'; 

@Component({
    selector: 'messages',
    template: `<h1>Messages</h1>
    <input [(ngModel)]="title">
    <ul>
        <li *ngFor="let m of messages">{{ m }}</li>
    </ul>
    `
})
export class MessagesComponent {
    messages;
    title = "New Message"

    constructor(service : MessagesService) {
        this.messages = service.getMessages();
    }
}