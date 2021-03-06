import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { BootstrapModule } from '@dog-hero/bootstrap';
import { AvatarModule, BadgeModule, CardModule, CommentModule } from '@dog-hero/shared-components';
import { NouisliderModule } from 'ng2-nouislider';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HorizontalScrollComponent } from './horizontal-scroll/horizontal-scroll.component';
import { HostsComponent } from './hosts/hosts.component';
import { getPtBrPaginatorIntl } from './pt-br-paginator-intl';
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
    NouisliderModule,
    MatListModule
  ],
  providers: [
    { provide: MatPaginatorIntl, useValue: getPtBrPaginatorIntl() }
  ]
})
export class HomeModule { }
