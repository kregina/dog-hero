import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BootstrapModule } from '@dog-hero/bootstrap';
import { AvatarModule, BadgeModule, CardModule, CommentModule } from '@dog-hero/shared-components';
import { NouisliderModule } from 'ng2-nouislider';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HorizontalScrollComponent } from './horizontal-scroll/horizontal-scroll.component';
import { HostsComponent } from './hosts/hosts.component';
import { SearchComponent } from './search/search.component';
import { HighlightsPipe } from './shared/highlights.pipe';

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
    ReactiveFormsModule,
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
