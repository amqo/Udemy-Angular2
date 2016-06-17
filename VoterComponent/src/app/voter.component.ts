import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'voter',
  template: `
    <div>
      <i class="glyphicon-menu-up"></i>
      <p>10</p>
      <i class="glyphicon-menu-down"></i>
    </div>
  `,
  styles: [`
    div {
      width: 20px;
    }
  `]
})

export class VoterComponent {

}
