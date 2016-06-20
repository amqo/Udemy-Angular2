import {Component} from 'angular2/core';
import { ZippyComponent } from './zippy.component';

@Component({
    selector: 'my-app',
    template: `
      <zippy title="This is the title">
        Here is the content
      </zippy>
    `,
    directives: [ZippyComponent]
})
export class AppComponent { }
