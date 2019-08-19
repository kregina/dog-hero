import { Component, OnInit } from '@angular/core';
import { HostsService } from '@dog-hero/api';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'dog-hero-hosts',
  templateUrl: './hosts.component.html',
  styleUrls: ['./hosts.component.scss']
})
export class HostsComponent implements OnInit {
  currentRate = 5;

  hosts$ = this.hostsService.getHosts().pipe(tap(console.log));

  constructor(private hostsService: HostsService) { }

  ngOnInit() {
  }

}
