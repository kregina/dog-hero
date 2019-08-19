import { moduleMetadata, storiesOf } from '@storybook/angular';

import { AvatarModule } from '../avatar';
import { CommentModule } from './comment.module';

storiesOf('Comment', module)
.addDecorator(
  moduleMetadata({
    imports: [CommentModule, AvatarModule]
  })
)
.add('basic', () => ({
  template: `
  <div style="width:320px; padding:2em; background-color:#f1f1f1">
    <dh-comment>
      Simple comment
      <dh-avatar>AVATAR</dh-avatar>
    </dh-comment>
  </div>
  `
}))
