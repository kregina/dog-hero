import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { Card, CardAvatar, CardExtra, CardHeader, CardSubtitle, CardTitle, CardContent, CardAlert } from './card';

const MODULE_DECLARATIONS = [Card, CardAvatar, CardExtra, CardHeader, CardSubtitle, CardTitle, CardContent, CardAlert];

@NgModule({
  declarations: MODULE_DECLARATIONS,
  imports: [
    CommonModule
  ],
  exports: MODULE_DECLARATIONS
})
export class CardModule { }
