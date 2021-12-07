import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LazyLoadScriptService } from './service/lazy-load-script.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routing.modules';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [LazyLoadScriptService,
    // { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi,: true }],
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
