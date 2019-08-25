import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Host, HostsService } from '@dog-hero/api';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map, shareReplay, switchMap, tap, distinctUntilChanged } from 'rxjs/operators';

import { FilterEvent, SearchEvent } from './model';

@Injectable()
export class HomeService {
  search$ = combineLatest(
    this.fromQueryParam('address'),
    this.fromQueryParam('from'),
    this.fromQueryParam('to')
  )
  filter$ = combineLatest(
    this.fromQueryParam('price')
  )
  page$ = this.fromQueryParam('page');
  count$ = new BehaviorSubject(0);
  pageSize = 10;

  private hosts$ = this.hostsService.getHosts();

  displayedHosts$ = this.search$.pipe(
    //simulate server side search
    switchMap(search => this.hosts$.pipe(
      map(hosts => this.applySearch(hosts, search)))),
    //client side filter
    switchMap(hosts => this.filter$.pipe(
      map(filter => this.applyFilter(hosts, filter)))),
    //reset to first page when search changes
    tap(({ length }) => this.count$.next(length)),
    //client side paginations
    switchMap(hosts => this.page$.pipe(
      map(page => this.applyPagination(hosts, page)),
    ))
  );

  constructor(
    private hostsService: HostsService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  public search(event: SearchEvent) {
    this.router.navigate(['./'], {
      queryParams: {
        ...event,
        page: null
      },
      queryParamsHandling: 'merge'
    });
  }

  public filter(event: FilterEvent) {
    this.router.navigate(['./'], {
      queryParams: {
        ...event,
        price: event.price.join('-'),
        page: null
      },
      queryParamsHandling: 'merge'
    });
  }

  public paginate(page: number) {
    this.router.navigate(['./'], {
      queryParams: {
        page: page > 1 ? page : null
      },
      queryParamsHandling: 'merge'
    });
  }

  private applySearch(hosts: Host[], [address, from, to]) {
    let result = hosts;

    if (address) {
      result = result.filter(host => host.region_address.includes(address));
    }

    return result;
  }

  private applyFilter(hosts: Host[], [price]) {
    let result = hosts;
    if (price) {
      const [min, max] = price.split('-');

      if (min) {
        result = result.filter(host => host.locale.price >= min)
      }
      if (max) {
        result = result.filter(host => host.locale.price <= max)
      }
    }

    return result;
  }

  private applyPagination(hosts: Host[], page) {
    page = +page || 1;
    const from = (page-1) * this.pageSize;
    const to = from + this.pageSize;

    return hosts.slice(from, to);
  }

  private fromQueryParam(key: string) {
    return this.route.queryParamMap.pipe(
      map(p => p.get(key)),
      distinctUntilChanged()
    );
  }
}
