import { ChangeDetectionStrategy, Component, Directive, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'dh-badge',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./badge.scss'],
  template: `
  <ng-content
    class="badge-content"
    select="dh-badge-content, [dh-badge-content], [dhBadgeContent]"></ng-content>
  <ng-content></ng-content>
  `,
  host: { 'class': 'dh-badge' }
})
export class Badge { }

@Directive({
  selector: `dh-badge-content, [dh-badge-content], [dhBadgeContent]`,
  host: { 'class': 'dh-badge-content' }
})
export class BadgeContent {}
