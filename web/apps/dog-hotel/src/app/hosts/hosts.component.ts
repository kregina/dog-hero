import { Component, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { HostsService, Host } from '@dog-hero/api';
import { combineLatest, defer } from 'rxjs';
import { map, tap, startWith } from 'rxjs/operators';

@Component({
  selector: 'dog-hero-hosts',
  templateUrl: './hosts.component.html',
  styleUrls: ['./hosts.component.scss']
})
export class HostsComponent {

  hostsCount: number;

  hosts$ = this.hostsService.getHosts().pipe(
    tap(hosts => this.hostsCount = hosts.length));

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  displayedHosts$ = combineLatest(
    this.hosts$,
    defer(() => this.paginator.page.pipe(startWith(null)))
  ).pipe(
    map(params => this.paginate(...params))
  );

  constructor(private hostsService: HostsService) { }

  private paginate(hosts: Host[], pageEvent: PageEvent) {
    let from: number;
    let to: number;

    if (!pageEvent) {
      from = 0;
      to = this.paginator.pageSize;
    } else {
      from = pageEvent.pageIndex * pageEvent.pageSize;
      to = from + pageEvent.pageSize;
    }

    return hosts.slice(from, to);
  }
}
