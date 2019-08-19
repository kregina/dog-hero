import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { Avatar } from './avatar';

@NgModule({
  declarations: [Avatar],
  imports: [
    CommonModule
  ],
  exports: [Avatar]
})
export class AvatarModule { }
