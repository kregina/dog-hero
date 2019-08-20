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
  <div style="width:320px; padding:1em;">
    <dh-comment>
      Simple comment
      <dh-avatar>
        <img width="33" height="33" src="https://avatars2.githubusercontent.com/u/22871954?s=460&v=4" alt="Kelly Silva" title="Kelly Silva" />
      </dh-avatar>
    </dh-comment>
  </div>
  `
}))
