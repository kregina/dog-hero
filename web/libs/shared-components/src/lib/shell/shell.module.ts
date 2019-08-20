import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';

import { ShellComponent } from './shell.component';

@NgModule({
  declarations: [ShellComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    PortalModule
  ],
  exports: [ShellComponent]
})
export class ShellModule { }
