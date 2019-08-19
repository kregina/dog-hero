import { Component, ViewEncapsulation, ChangeDetectionStrategy, Directive } from '@angular/core';

@Component({
  selector: 'dh-comment',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./comment.scss'],
  template: `
  <div class='dh-comment-message'><ng-content></ng-content></div>
  <ng-content select="
    dh-comment-avatar, [dh-comment-avatar], [dhCommentAvatar],
    dh-avatar, [dh-avatar], [dhAvatar]">
  </ng-content>`,
  host: { 'class': 'dh-comment' }
})
export class Comment { }

@Directive({
  selector: `dh-comment-avatar, [dh-comment-avatar], [dhCommentAvatar]`,
  host: { 'class': 'dh-comment-avatar' }
})
export class CommentAvatar { }
