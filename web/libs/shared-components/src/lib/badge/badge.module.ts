import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Badge, BadgeContent } from './badge';

const MODULE_DECLARATIONS = [Badge, BadgeContent];

@NgModule({
  declarations: MODULE_DECLARATIONS,
  imports: [
    CommonModule
  ],
  exports: MODULE_DECLARATIONS
})
export class BadgeModule { }
