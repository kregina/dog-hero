import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ShellService } from '@dog-hero/shared-components';

import { HomeService } from '../shared/home.service';

@Component({
  selector: 'dog-hero-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  //Reactive Forms
  searchForm = this.fb.group({
    address: '',
    from: '',
    to: ''
  });

  //Template Driven Forms
  filterForm = {
    price: [0, 100]
  }

  constructor(
    private fb: FormBuilder,
    public shellService: ShellService,
    public service: HomeService
  ) { }
}

