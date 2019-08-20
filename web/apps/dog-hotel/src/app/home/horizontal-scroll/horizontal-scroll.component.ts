import { Component, Input } from '@angular/core';

@Component({
  selector: 'dog-hero-horizontal-scroll',
  templateUrl: './horizontal-scroll.component.html',
  styleUrls: ['./horizontal-scroll.component.scss']
})
export class HorizontalScrollComponent {
  @Input() list: [];

  constructor() { }
}
