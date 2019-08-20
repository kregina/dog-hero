import { Component } from '@angular/core';
import { ShellService } from '@dog-hero/shared-components';

@Component({
  selector: 'dog-hero-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  someRange: number[] = [0, 100];
  model;

  constructor(public shellService: ShellService) { }
}
