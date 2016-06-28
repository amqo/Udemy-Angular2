import {Component} from 'angular2/core';
import { VoterComponent } from './voter.component';

@Component({
    selector: 'my-app',
    template: `
      <voter
       [vote-count]="post.voteCount"
       [my-vote]="post.myVote"
       (vote)="onVote($event)" >
      </voter>
    `,
    directives: [VoterComponent]
})
export class AppComponent {

  onVote({ newVote }) {
    console.log('New vote was', newVote);
  }

  // Post GET from a Server / External API
  post = {
    voteCount: 10,
    myVote: 0
  }
}
