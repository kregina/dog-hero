import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'dh-avatar',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./avatar.scss'],
  template: `
  <ng-content></ng-content>
  `,
  host: { 'class': 'dh-avatar' }
})
export class Avatar {}
