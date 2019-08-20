import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BootstrapModule } from '@dog-hero/bootstrap';
import { AvatarModule, BadgeModule, CardModule, CommentModule } from '@dog-hero/shared-components';
import { HorizontalScrollComponent } from '@dog-hotel/horizontal-scroll/horizontal-scroll.component';
import { HostsComponent } from '@dog-hotel/hosts/hosts.component';
import { SearchComponent } from '@dog-hotel/search/search.component';
import { NouisliderModule } from 'ng2-nouislider';

import { HighlightsPipe } from './highlights.pipe';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent,
    HostsComponent,
    HorizontalScrollComponent,
    HighlightsPipe
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    BootstrapModule,
    FormsModule,
    CardModule,
    AvatarModule,
    BadgeModule,
    CommentModule,
    MatPaginatorModule,
    NouisliderModule
  ]
})
export class HomeModule { }
