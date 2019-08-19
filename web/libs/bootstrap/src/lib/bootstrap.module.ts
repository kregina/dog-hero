import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [NgbDatepickerModule]
})
export class BootstrapModule {}
