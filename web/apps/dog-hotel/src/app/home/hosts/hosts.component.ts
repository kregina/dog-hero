import { Component } from '@angular/core';

import { HomeService } from '../shared/home.service';

@Component({
  selector: 'dog-hero-hosts',
  templateUrl: './hosts.component.html',
  styleUrls: ['./hosts.component.scss']
})
export class HostsComponent {
  constructor(public service: HomeService) {}
}
