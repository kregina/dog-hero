import { moduleMetadata, storiesOf } from '@storybook/angular';

import { AvatarModule } from './avatar.module';

storiesOf('Avatar', module)
  .addDecorator(
    moduleMetadata({
      imports: [AvatarModule]
    })
  )
  .add('basic', () => ({
    template: `
    <dh-avatar>
      <img width="100" height="100" src="https://avatars2.githubusercontent.com/u/22871954?s=460&v=4" alt="Kelly Silva" title="Kelly Silva" />
    </dh-avatar>
    `
  }))
