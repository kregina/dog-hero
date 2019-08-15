import { CardModule } from './card/card.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellModule } from './shell/shell.module';

@NgModule({
  imports: [CommonModule],
  exports: [CardModule, ShellModule]
})
export class SharedComponentsModule {}
