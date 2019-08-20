import { ComponentPortal, ComponentType, Portal, TemplatePortal } from '@angular/cdk/portal';
import { Injectable, TemplateRef, ViewContainerRef } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShellService {
  private _subscription: Subscription;
  private _portal = new Subject<Portal<any>>();
  private _sidenav: MatSidenav;

  portal$ = this._portal.asObservable();

  constructor(private _viewContainerRef: ViewContainerRef) {
    this._subscription = this.portal$.subscribe(_ => this._sidenav.open())
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

  openTemplate(template: TemplateRef<any>) {
    this._portal.next(new TemplatePortal(template, this._viewContainerRef));
  }

  openComponent(component: ComponentType<any>) {
    this._portal.next(new ComponentPortal(component));
  }

  close() {
    this._sidenav.close();
  }

  attatch(sidenav: MatSidenav) {
    this._sidenav = sidenav;
  }
}
