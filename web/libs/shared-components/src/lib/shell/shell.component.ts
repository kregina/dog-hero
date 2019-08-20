import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ShellService } from './shell.service';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'dh-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  providers: [
    ShellService
  ]
})
export class ShellComponent implements AfterViewInit {
  @ViewChild('rightSidenav', {static: false}) rightSidenav: MatSidenav

  constructor(public shellService: ShellService) { }

  ngAfterViewInit() {
    this.shellService.attatch(this.rightSidenav);
  }
}
