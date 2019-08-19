import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbDatepickerModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    NgbDatepickerModule,
    NgbRatingModule
  ]
})
export class BootstrapModule {}
