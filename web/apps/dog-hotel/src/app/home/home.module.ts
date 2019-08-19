import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BootstrapModule } from '@dog-hero/bootstrap';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    BootstrapModule,
    FormsModule
  ]
})
export class HomeModule { }
