import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { API_BASE_URL } from '@dog-hero/api';
import { environment } from '@dog-hotel-env/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ShellModule } from '@dog-hero/shared-components';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShellModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ShellModule
  ],
  providers: [
    { provide: API_BASE_URL, useValue: environment.apiUrl }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
