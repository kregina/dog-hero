import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { API_BASE_URL } from '@dog-hero/api';
import { BootstrapModule } from '@dog-hero/bootstrap';
import { ShellModule } from '@dog-hero/shared-components';
import { environment } from '@dog-hotel-env/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShellModule,
    BootstrapModule
  ],
  providers: [
    { provide: API_BASE_URL, useValue: environment.apiUrl }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
