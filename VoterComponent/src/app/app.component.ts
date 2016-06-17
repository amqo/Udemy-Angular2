import { Component } from '@angular/core';
import { VoterComponent } from './voter.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  directives: [VoterComponent],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app works, changed!';
}
