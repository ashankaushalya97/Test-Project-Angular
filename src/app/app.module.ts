import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './view/test/test.component';
import {CustomerService} from "./service/customer.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule // also auto include httpClient to the context
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
