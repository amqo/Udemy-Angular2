
import { Injectable } from '@angular/core';

@Injectable()
export class MessagesService {
    getMessages() {
        return [ 'm1', 'm2', 'm3' ];
    }
}