import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dog-hero-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  model;
  currentRate = 5;

  constructor() { }

  ngOnInit() {
  }

}