import { moduleMetadata, storiesOf } from '@storybook/angular';

import { BadgeModule } from './badge.module';

storiesOf('Badge', module)
  .addDecorator(
    moduleMetadata({
      imports: [BadgeModule]
    })
  )
  .add('text', () => ({
    template: `
  <dh-badge>
    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
      height="64" width="64" title="WhatsApp" alt="WhatsApp">
    <span dhBadgeContent
      style="background-color:red;color:white; border-radius:50%; padding:5px;">12</span>
  </dh-badge>
  `
  }))
  .add('image', () => ({
    template: `
  <dh-badge>
    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
      height="64" width="64" title="WhatsApp" alt="WhatsApp">
    <img dhBadgeContent
      src="http://www.msisolutions.com/wp-content/uploads/2017/04/cloud-restore-300x218.png"
      width="32" height="24"
      alt="Angular" title="Angular" />
  </dh-badge>
  `
  }));
