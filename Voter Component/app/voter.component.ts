import { Component, Input, Output, EventEmitter } from 'angular2/core';

@Component({
  selector: 'voter',
  templateUrl: 'app/voter.template.html',
  styles: [`
    .voter {
      width: 20px;
      text-align: center;
      color: #999;
    }
    .vote-count {
      font-size: 1.2em;
    }
    .vote-button {
      cursor: pointer;
    }
    .highlight {
      font-weight: bold;
      color: orange;
    }
  `]
})

export class VoterComponent {
  @Input('vote-count') voteCount = 0;
  @Input('my-vote') myVote = 0;

  @Output() vote = new EventEmitter();

  onClickUp() {
    if (this.myVote === 1)
      return;

    this.voteCount++;
    this.myVote++;
    this.vote.emit({ newVote: this.myVote });
  }

  onClickDown() {
    if (this.myVote === -1)
      return;

    this.voteCount--;
    this.myVote--;
    this.vote.emit({ newVote: this.myVote });
  }
}
