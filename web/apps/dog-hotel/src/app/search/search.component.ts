import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dog-hero-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  someRange: number[] = [0, 100];
  model;
  constructor() { }

  ngOnInit() {
  }

}
