import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { Comment, CommentAvatar } from './comment';

const MODULE_DECLARATIONS = [Comment, CommentAvatar];

@NgModule({
  declarations: MODULE_DECLARATIONS,
  imports: [
    CommonModule
  ],
  exports: MODULE_DECLARATIONS
})
export class CommentModule { }
