import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BootstrapModule } from '@dog-hero/bootstrap';
import { CardModule } from '@dog-hero/shared-components';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    BootstrapModule,
    FormsModule,
    CardModule
  ]
})
export class HomeModule { }
