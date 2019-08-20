import { Component } from '@angular/core';

import { HomeService } from './shared/home.service';

@Component({
  selector: 'dog-hero-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [HomeService]
})
export class HomeComponent {}
