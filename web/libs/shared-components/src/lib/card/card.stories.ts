import { NO_ERRORS_SCHEMA } from '@angular/core';
import { moduleMetadata, storiesOf } from '@storybook/angular';

import { CardModule } from './card.module';

storiesOf('Card', module)
.addDecorator(
  moduleMetadata({
    imports: [CardModule]
  })
)
.add('basic', () => ({
  template: `
  <div style="width:320px; padding:2em; background-color:#f1f1f1">
    <dh-card>Simple card</dh-card>
  </div>
  `
}))
.add('with header', () => ({
  template: `
  <div style="width:320px; padding:2em; background-color:#f1f1f1">
    <dh-card>
      <dh-card-header>
        <h3 dh-card-title>Sample Title</h3>
        <h4 dh-card-subtitle>Sample Subtitle</h4>
      </dh-card-header>
      HELLO WORDL!
    </dh-card>
  </div>
  `
}))
.add('complete', () => ({
  template: `
  <div style="width:320px; padding:2em; background-color:#f1f1f1">
    <dh-card>
      <dh-card-alert>Disponível para o feriado</dh-card-alert>
      <dh-card-header>
        <dh-card-avatar>AVATAR</dh-card-avatar>
        <dh-card-title>Jeremiah</dh-card-title>
        <dh-card-subtitle>Lar cheio de amor pra dar e vender</dh-card-subtitle>
        <dh-card-subtitle>Vila Mariana a 1.2km</dh-card-subtitle>
        <div>★★★★★ (122)</div>
        <dh-card-extra>
          <button>❤</button>
          <div>
            <div>R$96</div>
            <div><small>p/ noite</small></div>
          </div>
        </dh-card-extra>
      </dh-card-header>
      <dh-card-content>
        HELLO WORLD!
      </dh-card-content>
    </dh-card>
  </div>
  `
}));
