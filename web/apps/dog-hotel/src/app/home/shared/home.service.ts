import { Injectable } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Host, HostsService } from '@dog-hero/api';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map, switchMap, tap, withLatestFrom, shareReplay } from 'rxjs/operators';

import { FilterEvent, SearchEvent } from './model';

const firstPage = <PageEvent>{
  pageIndex: 0,
  pageSize: 10,
  length: 0
}

@Injectable()
export class HomeService {
  search$ = new BehaviorSubject(null);
  filter$ = new BehaviorSubject(null);
  count$ = new BehaviorSubject(null);
  page$ = new BehaviorSubject(firstPage);

  private hosts$ = this.hostsService.getHosts().pipe(
    tap(({ length }) => this.count$.next(length)),
  );

  displayedHosts$ = combineLatest(
    this.hosts$,
    this.search$,
    this.filter$,
    this.page$
  ).pipe(
    map(([hosts, search, filter, page]) => {
      return this.applyPagination(this.applyFilter(this.applySearch(hosts, search), filter),page)
    })
  )
  constructor(private hostsService: HostsService) { }

  public search(event: SearchEvent) {
    this.search$.next(event);
  }

  public filter(event: FilterEvent) {
    this.filter$.next(event);
  }

  public paginate(event: PageEvent) {
    this.page$.next(event);
  }

  private applySearch(hosts: Host[], searchEvent: SearchEvent) {
    let result = hosts;

    if (searchEvent) {
      if (searchEvent.address) {
        result = result.filter(host => host.region_address.includes(searchEvent.address))
      }
    }

    return result;
  }

  private applyFilter(hosts: Host[], filterEvent: FilterEvent) {
    let result = hosts;
    if (filterEvent) {
      const [ minPrice, maxPrice ] = filterEvent.priceRange;
      if (minPrice) {
        result = result.filter(host => host.locale.price >= minPrice)
      }
      if (maxPrice) {
        result = result.filter(host => host.locale.price <= maxPrice)
      }
    }

    return result;
  }

  private applyPagination(hosts: Host[], pageEvent: PageEvent) {
    const from = pageEvent.pageIndex * pageEvent.pageSize;
    const to = from + pageEvent.pageSize;

    return hosts.slice(from, to);
  }
}