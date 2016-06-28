import { Component, Input } from 'angular2/core';

@Component({
  selector: 'zippy',
  templateUrl: 'app/zippy.template.html'
})

export class ZippyComponent {
  @Input() title:string;
  isZipped = true;

  toggle() {
    this.isZipped = !this.isZipped;
  }
}
