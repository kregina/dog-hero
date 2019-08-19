import { ChangeDetectionStrategy, Component, Directive, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'dh-card',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./card.scss'],
  template: `
  <ng-content select="dh-card-alert, [dh-card-alert], [dhCardAlert]"></ng-content>
  <ng-content></ng-content>`,
  host: { 'class': 'dh-card' }
})
export class Card {}

@Component({
  selector: 'dh-card-header',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <ng-content select="
    dh-card-avatar, [dh-card-avatar], [dhCardAvatar],
    dh-avatar, [dh-avatar], [dhAvatar]">
  </ng-content>
  <div class="dh-card-title-group">
    <ng-content select="
      dh-card-title, [dh-card-title], [dhCardTitle],
      dh-card-subtitle, [dh-card-subtitle], [dhCardSubtitle]">
    </ng-content>
    <ng-content></ng-content>
  </div>
  <ng-content select="
    dh-card-extra, [dh-card-extra], [dhCardExtra]">
  </ng-content>
  `,
  host: { 'class': 'dh-card-header' }
})
export class CardHeader { }

@Directive({
  selector: `dh-card-title, [dh-card-title], [dhCardTitle]`,
  host: { 'class': 'dh-card-title' }
})
export class CardTitle {}

@Directive({
  selector: `dh-card-subtitle, [dh-card-subtitle], [dhCardSubtitle]`,
  host: { 'class': 'dh-card-subtitle' }
})
export class CardSubtitle { }

@Directive({
  selector: `dh-card-avatar, [dh-card-avatar], [dhCardAvatar]`,
  host: { 'class': 'dh-card-avatar' }
})
export class CardAvatar { }

@Directive({
  selector: `dh-card-extra, [dh-card-extra], [dhCardExtra]`,
  host: { 'class': 'dh-card-extra' }
})
export class CardExtra {}

@Directive({
  selector: `dh-card-content`,
  host: { 'class': 'dh-card-content' }
})
export class CardContent { }

@Directive({
  selector: `dh-card-alert, [dh-card-alert], [dhCardAlert]`,
  host: { 'class': 'dh-card-alert' }
})
export class CardAlert {}
